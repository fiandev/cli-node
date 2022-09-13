const fs = require("fs")
const path = require("path")

const _toConsumableArray = (arr) => {
  if (Array.isArray(arr)) {
    for (let i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
  }
    return arr2; 
  } else {
    return Array.from(arr);
  }
}

/**
 * @date 2022-09-13 (Programmer's Day)
 * @param {any} folder
 * @param {any} output
 * @returns {any}
 */
const JMG = (folder, output) => {
    let _ref;
    let exp = /.(json)/
    let files = fs.readdirSync(path.resolve(folder));
    let jsons = []
    
    for (let file of files) {
      if (exp.test(file)) {
        let json = fs.readFileSync(folder + "/" + file);
        jsons.push(JSON.parse(json))
      }
    }
    
    let merged = (_ref = []).concat.apply(_ref, _toConsumableArray(jsons));
    fs.writeFileSync(output, JSON.stringify(merged, null, 2));
}

module.exports = {
  JMG
}
