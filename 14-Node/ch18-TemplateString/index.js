'use strict';

const detail = `기존 방법`;
const details = `template string`;
let str = `node.js`;

let oldStyle = str += ' 올인원 패키지 ' + detail;
let newStyle = `올인원 패키지 ${details}`;

console.log(oldStyle)
// node.js 올인원 패키지 기존 방법
console.log(newStyle)
// 올인원 패키지 template string