// Copyright 2014 Simon Lydell
// License: MIT. (See LICENSE.)

var fs = require("fs")

require("coffeescript/register")
var regex = require("./regex.coffee")

var code = fs.readFileSync("index.js").toString()
code = code.replace(/\/.+\/.+/, regex.toString())
fs.writeFileSync("index.js", code)
