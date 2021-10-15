'use strict';

const arr = [2, 1, 0, -1, -2];

const res = arr.some( key => key < 0);

console.log(res);
// true

const arr2 = [2, 1, 0];

const res2 = arr2.some( key => key < 0);

console.log(res2);
// false