// https://nodejs.org/dist/latest-v14.x/docs/api/path.html
// The path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('path')

console.log(__filename)
console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
console.log(path.parse(__filename).dir)

console.log(path.join(__dirname, 'test', 'second.html'))
console.log(path.resolve(__dirname, './test', '/second.html'))

