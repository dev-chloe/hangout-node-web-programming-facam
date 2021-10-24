'use strict';

const timeoutObj = setTimeout(() => {
  console.log('first')
}, 0);
// 최소 1초 이후에 실행된다.

const immediateObj = setImmediate(() => {
  console.log('second')
});

/*
second
first 
|| 
first
second
* setTimeout과 setImmediate의 결과가 그때 그때 다르다
 해당하는 완료 시점에 따라서 다르기 때문에 임의의 결과가 나온다.
*/

const intervalObj = setInterval(()=> {
  console.log('third')
  // 1 초마다 third가 출력된다
}, 1000)

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);