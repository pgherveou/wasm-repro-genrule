const fs = require('fs')
const { inspect } = require('util')
const { greeting } = require('./hello_world_nodejs_wasm_bindgen')

console.log(greeting('PG'))
// fs.writeFileSync(process.argv[2], `${greeting('PG')}`, 'utf8')
