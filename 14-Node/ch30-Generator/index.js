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