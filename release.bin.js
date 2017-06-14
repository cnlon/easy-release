#!/usr/bin/env node
const path = require('path')
const release = require('./release.js')

const pkgPath = path.resolve('./package.json')
let pkg
try {
    pkg = require(pkgPath)
} catch (err) {
    console.error(err.message)
    process.exit(1)
}

release(pkg)
