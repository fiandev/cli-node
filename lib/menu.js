const pkg = require("../package.json")

const Lists = ["menu", "mv", "rename", "cp", "del", "dl", "unzip", "zip", "property", "jmg", "exe"]
let Menu = ""

Lists.forEach((list) => {
  Menu += "=> " + list + "\n"
})

const log = (text) => console.log(text)

const Layout = `
===== [${ pkg.name } v${ pkg.version }] =====
===> Menu <===
${ Menu }
`

const ShowMenu = () => {
  log(Layout)
}

module.exports = {
  ShowMenu
}