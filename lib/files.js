const fs = require('fs')  
const path = require('path')  
const axios = require('axios')  
const progressbar = require('progress')
const fsx = require("fs-extra")
const zipper = require("zip-local")
const unzipper = require("unzipper")

/*
 * @param path (string)
 * @param dest (string)
**/
const Rename = (path, dest) => {
  fs.rename(path, dest, function (e) {
    if (e) throw new Error(e)
    console.log(`successfully Renamed, file from ${ path } to ${ dest }`)
  })
}

/*
 * @param path (string)
 * @param dest (string)
**/
const Move = (path, dest) => {
  fsx.move(path, dest, function (e) {
   if (e) throw new Error(e)
   console.log(`successfully Moved, file from ${ path } to ${ dest }`)
  })
}
/*
 * @param url (string) 
 * @param dest (string)
*/
const Download = async (url, dest) => {
  console.log('Fetching …')
  const { data, headers } = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })
  const totalLength = headers['content-length']

  console.log('Starting download')
  const progressBar = new progressbar('Downloading [:bar] :percent :etas', {
      width: 10,
      complete: '=',
      incomplete: '#',
      renderThrottle: 1,
      total: parseInt(totalLength)
    })
  
  const writer = fs.createWriteStream(
    path.resolve(dest)
  )
  
  data.on('data', (chunk) => progressBar.tick(chunk.length))
  data.pipe(writer)
  
  data.on("end", () => {
    console.log(`Download completed, Saved To ${ dest }`)
  })
}

/*
 * @param pathfile (string)
 * @param dest (string)
**/
const UnZipper = (pathfile, dest) => {
  fs.createReadStream( path.resolve(pathfile) )
  .pipe(
  unzipper.Extract({ 
    path: path.resolve(dest) 
  }))
  
  console.log(`success extract file at ${ pathfile } to ${ dest }`)
}

const Zipper = (from, dest) => {
  from = path.resolve(from).substr(-1) === "/" ? path.resolve(from) : "/" + path.resolve(from)
  dest = path.resolve(dest).substr(-1) === "/" ? path.resolve(dest) : "/" + path.resolve(dest)
  
  let pathinfo = fs.statSync(from)
  let isDir = pathinfo.isDirectory()
  
  zipper.sync.zip(from).compress().save(dest)
  
  console.log(`success zipping ${ isDir ? "directory" : "file" } ${ from } to ${ dest }`)
}

const Properties = async (dir) => {
  let dirname = path.resolve(dir)
  dirname = dirname.substr(-1) === "/" ? dirname : dirname + "/"
  let props = {
    directory: null,
    files: [],
    total_files: null
  }
  
  props.directory = dirname
  fs.readdir(dirname, function(err, filenames) {
    if (err) throw err

    let file = {
      name: null,
      content: null
    }
    
    props.total_files = filenames.length
    filenames.forEach(function(filename) {
      file.name = filename
      
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) throw err
        
        file.content = content
        props.files.push(file)
        
        console.log(props)
        return props
      })
    })
    
  })
  
}

module.exports = {
  Rename,
  Move,
  Download,
  Unzipper,
  Zipper,
  Properties
}