const fs = require("fs")
const path = require("path")

const _toConsumableArray = (arr) => {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
  }
    return arr2; 
  } else {
    return Array.from(arr);
  }
}

/**
 * merge multi json file in folder into one json file
 * @date 2022-09-10
 * @param {any} folder
 * @param {any} output
 * @returns {any}
 */
const JMG = (folder, output) => {
    var _ref;
    var exp = /.(json)/
    var files = fs.readdirSync(path.resolve(folder));
    var jsons = []
    for (let file of files) {
      if (exp.test(file)) {
        var json = fs.readFileSync(folder + "/" + file);
        jsons.push(JSON.parse(json))
      }
    }
    var merged = (_ref = []).concat.apply(_ref, _toConsumableArray(jsons));
    fs.writeFileSync(output, JSON.stringify(merged, null, 2));
}

module.exports = {
  JMG
}
