const package = require("../package.json")

const Lists = ["menu", "move", "rename", "download/dl", "unzip", "property", "jmg", "ganti-command"]
let Menu = ""

Lists.forEach((list) => {
  Menu += "=> " + list + "\n"
})

const log = (text) => console.log(text)

const Guide = `
===== [${ package.name } v${ package.version }] =====
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