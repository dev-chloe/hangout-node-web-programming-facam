'use strict';

// ex
(function () {
  // Do fun stuff
})();

(function () {
  var lang = 'js';
})();

// console.log(lang);
/* 
console.log(lang);
            ^
ReferenceError: lang is not defined
IIFE 내부로 접근이 불가능하기 때문에 오류 발생한다.
*/

var r = (function () {
  var lang = 'js';
  return lang
})();

console.log(r);
/* 
js
IIFE는 변수에 할당이 되어도 함수가 실행된 결과만을 반환한다.
*/