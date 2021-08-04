const getExports = require('./exports');

console.log(getExports.seding)
// This file send this sentence.

const getExportsFunc = require('./exportsFunc');
const setExportsFunc = new getExportsFunc;

console.log(setExportsFunc.name);
// coco