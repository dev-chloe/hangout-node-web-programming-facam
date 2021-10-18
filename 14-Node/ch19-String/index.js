'use strict';

let string = '안녕 오늘은 월요일이다';

let isStartWidth = string.startsWith('안');
let isIncludes = string.includes('오늘에');
let isEndWith = string.endsWith('다');

const checkIfContains = () => {
  // 세가지 조건 다 만족
  // if (isStartWidth && isIncludes && isEndWith) {
  //   return true;
  // }

  // 둘중에 하나만 만족
  if ((isStartWidth || isIncludes) && isEndWith) {
    return true;
  }
}

const ret = checkIfContains();

console.log(ret);