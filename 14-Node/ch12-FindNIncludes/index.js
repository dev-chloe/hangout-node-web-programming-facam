'use strict';

const arr = ['node.js', '올인원'];

const ret = arr.find(key => key === '올인원');

console.log(ret);
// 올인원

const res = arr.includes('node.js');
const ress = arr.includes('node');

console.log(res);
// true
console.log(ress);
// false

