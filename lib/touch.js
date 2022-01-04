#!/usr/bin/env node

const program = require("commander")
const fs = require("fs");

program
  .version('1.0.0', '-v, --version')
  .usage('[folderName]/[filename]')
  .description('Create a new file in the current directory')
  .parse(process.argv);

const filename = program.args.shift();

if (!filename) return console.log('🤣 Please enter a file name')

const pathArr = filename.split('/')

let path = ''

for (let i = 0; i < pathArr.length - 1; i++) {
  path += pathArr[i] + '/'
  fs.mkdirSync(path)
}

const fileDescriptor = fs.openSync(filename, "a")
const now = new Date();

fs.futimesSync(fileDescriptor, now, now);
fs.closeSync(fileDescriptor);
