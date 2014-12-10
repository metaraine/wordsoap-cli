'use strict'

var com = require('commander')
var stdin = require('get-stdin-promise')
var wordsoap = require('wordsoap')
var cint = require('cint')
var pkg = require('./package.json')

var extendedHelp = [
	'',
	'',
	pkg.description,
	'',
	'Reads from stdin:',
	'$ cat msword_garbage.html | wordsoap'
].join('\n  ')

com
	.version(pkg.version)
	.usage(extendedHelp)
	.parse(process.argv)

stdin.then(function (text) {
	console.log(wordsoap(text))
})
.then(null, console.log)

