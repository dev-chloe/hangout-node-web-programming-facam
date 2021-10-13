'use strict';

const arr = [2, 3, 4];

const isBiggerThenOne = arr.every( key => key > 1);

console.log(isBiggerThenOne);
// true



const arr2 = [2, 3, 4];

const isBiggerThenTwo = arr.every( key => key > 2);

console.log(isBiggerThenTwo);
// false