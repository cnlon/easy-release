#!/usr/bin/env node

const release = require('./release.js')

const pkgPath = __dirname + '/package.json'
let pkg
try {
    pkg = require(pkgPath)
} catch (err) {
    throw err
}

release(pkg)
