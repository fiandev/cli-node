const { exec, spawn, execFile } = require('child_process')
const fs = require("fs")

const pkg = require("../package.json")

const ChangeCommand = async (before, after) => {
  if (!pkg.bin[before]) throw new Error(`command prefix ${ before } not found!`)
  
  Object.defineProperty(pkg.bin, after, Object.getOwnPropertyDescriptor(pkg.bin, before))

  delete pkg.bin[before]
  
  let jsonText = JSON.stringify(pkg)
  
  fs.writeFileSync("../package.json", jsonText)
  
  await exec("npm link")
  console.log(`success change prefix ${ before } to ${ after }`)
}

const Execute = (command) => {
  exec(...command, (err, stdout, stderr) => {
    if (err) console.log(err)
    if (stderr !== "") console.log(stderr)
    
    /* resulr command */
    console.log(`===> ${ command } \n`)
    console.log(stdout)
  })
}

module.exports = {
  ChangeCommand,
  Execute
}