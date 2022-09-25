#!/usr/bin/env node

const process = require("process")
const argv = process.argv
const Exit = () => process.exit()

const { Execute } = require("../utilities/index.js")
const { JMG } = require ("../lib/json-utils.js")

const { 
  Guide, 
  ShowMenu
} = require("../lib/menu.js")

const { 
  Rename, 
  Move,
  Copy,
  Delete,
  UnZipper, 
  Zipper, 
  Download, 
  Properties
} = require("../lib/files.js")

/* package.json */
const app = require("../package.json")
/* commander */
const { Command } = require("commander")
const program = new Command()

/* program information */
program
  .name(app.name)
  .usage("<command> [options]")
  .version(app.version, "-v, --version", "show app version")
  .showSuggestionAfterError()
  .helpOption("-h, --help", "show help menu")

program
  .command("menu")
  .description("show list menu")
  .action(() => {
    ShowMenu()
  })

program
  .command("exe [any...]")
  .description("run any command line")
  .action((any) => {
    Execute(any)
  })

program
  .command("mv [path] [dest]")
  .description("move file/folder to path destination")
  .action((path, dest) => {
    Move(path, dest)
  })

program
  .command("cp [path] [dest]")
  .description("copy file/folder to path destination")
  .action((path, dest) => {
    Copy(path, dest)
  })
  
program
  .command("rename [path] [dest]")
  .description("rename file/folder to path destination")
  .action((path, dest) => {
    Rename(path, dest)
  })
  
program
  .command("del [path]")
  .description("delete file/folder")
  .action((path) => {
    Delete(path)
  })
  
program
  .command("dl [url] [dest]")
  .description("download file from url")
  .action((url, dest) => {
    Download(url, dest)
  })
  
program
  .command("zip [from] [dest]")
  .description("zipping file/folder")
  .action((from, dest) => {
    Zipper(from, dest)
  })
  
program
  .command("unzip [from] [dest]")
  .description("unzipping file compressed")
  .action((from, dest) => {
    UnZipper(from, dest)
  })
  

  
  
  
  
  
  
/* parsing command to run */
program.parse()