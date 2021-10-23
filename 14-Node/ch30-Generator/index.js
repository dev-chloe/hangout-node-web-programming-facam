'use strict';

function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();

gen.next('zero');
gen.next('first');
gen.next('second');
// 0 first
// 1 second

const obj = {
  *gen() {
    let cnt = 0;
    yield ++ cnt;
    yield ++ cnt;
    yield ++ cnt;
  }
}

const g =obj.gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/