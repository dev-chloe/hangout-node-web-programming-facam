'use strict';

const obj = {
  title: 'node.js',
  value: 'class'
}

// common.js
const titleOld = obj.title;
const valueOld = obj.value;
console.log(titleOld + " old", valueOld + " old")
// node.js old class old

// es6
const { title, value } = obj;

console.log(title, value)
// node.js class

const arr = [0, 1, 2];
const [, a, b] = arr;

console.log(a, b)
// 1 2