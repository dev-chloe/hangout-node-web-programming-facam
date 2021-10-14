'use strict';

// Object.assign
const obj = {
  title: 'node.js'
}


const newObj = {
  name: 'package.json'
}

const ret = Object.assign({}, obj, newObj);

console.log(ret);
// { title: 'node.js', name: 'package.json' }

// spread
const spreadRet = {
  ...obj,
  ...newObj
}

console.log(spreadRet);
// { title: 'node.js', name: 'package.json' }

const arr = [1, 2, 3];
const newArr = [4, 5, 6];

const spreadArrRet = [
  ...arr,
  ...newArr
]

console.log(spreadArrRet);
// [ 1, 2, 3, 4, 5, 6 ]

const spreadArrRet2 = {
  ...arr,
  ...newArr
}

console.log(spreadArrRet2);
// { '0': 4, '1': 5, '2': 6 }