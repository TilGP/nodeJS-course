// You schould already know:
// HTML, CSS and JavaScript
// Possibly experience with other libaries and framework

// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
// console.log('Hello World')
// 3) global object instead of window object
// console.log(global)
// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules

const os = require('os')
const path = require('path')
const { add, subtract, multiply, divide } = require('./math')

// console.log(os.type())
// console.log(os.version)
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

console.log(add(8, 4))
console.log(subtract(8, 4))
console.log(multiply(8, 4))
console.log(divide(8, 4))