'use strict';

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2000), 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(0), 0);
});

Promise.race([promise1, promise2])
.then(values => console.log(values))
// 0
// promise2가 promise1보다 경쟁조건에서 우위에 있기 때문에 먼저 리턴이 되어서 출력이 된다.