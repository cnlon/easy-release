#!/usr/bin/env node
var path = require('path')
var release = require('./release.js')

var pkgPath = path.resolve('./package.json')
var pkg
try {
    pkg = require(pkgPath)
} catch (err) {
    console.error(err.message)
    process.exit(1)
}

release(pkg)
