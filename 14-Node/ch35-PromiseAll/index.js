'use strict';

const promise1 = new Promise((resolve, reject) => resolve("즉시 호출"));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3초 뒤에 호출");
  }, 3000);
});

Promise.all([promise1, promise2])
.then(values => console.log(values))
// [ '즉시 호출', '3초 뒤에 호출' ]
// 모든 결과가 3초 뒤에 출력되었다.