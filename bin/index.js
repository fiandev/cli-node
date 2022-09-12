#!/usr/bin/env node

const process = require("process")
const argv = process.argv

const { Execute } = require("../utilities/index.js")
const { Rename, Move, UnZipper, Download, Propertie } = require("../lib/files.js")
const { JMG } = require ("../lib/json-utils.js")
const { Guide, ShowMenu } = require("../lib/menu.js")

if (argv.length < 3) ShowMenu()

const args = (n) => argv[n]

const prefix = args(1)
const command = args(2)
const args1 = args(3)
const args2 = args(4)

switch (command) {
  case 'menu':
     ShowMenu()
    break;
  case 'move':
  case 'pindahin':
     Move(args1, args2)
    break;
  case 'rename':
  case 'ganti':
     Rename(args1, args2)
    break;
  case 'download':
  case 'dl':
     Download(args1, args2)
    break;
  case 'extract':
  case 'ekstrak':
  case 'unzip':
  case 'unArchive':
  case 'unrar':
      UnZipper(args1, args2)
    break;
  case 'properties':
  case 'property':
  case 'props':
      Properties(args1)
    break;
  case 'jmg':
  case 'gabungin':
      JMG(args1, args2)
    break;
  case 'exe':
  case 'execute':
      Execute(prefix, args1)
    break;
  default:
     console.log("command not found!")
    break;
}