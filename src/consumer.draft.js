const marker = require('@ajar/marker')
const slugger = require('./index')


const args = "something that needs to be slugged"
marker.blue("process this: " + args);
const result = slugger(args);
marker.red("done: " + result);