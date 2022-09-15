const pkg = require("../package.json")

const Lists = ["menu", "move", "rename", "copy", "delete", "download/dl", "unzip", "property", "jmg"]
let Menu = ""

Lists.forEach((list) => {
  Menu += "=> " + list + "\n"
})

const log = (text) => console.log(text)

const Guide = `
===== [${ pkg.name } v${ pkg.version }] =====
===> Menu <===
${ Menu }
`

const ShowMenu = () => {
  log(Guide)
}

module.exports = {
  Guide,
  ShowMenu
}