'use strict';

const numbers = [10, 20, 30, 40];

// reducesms 각각의 배열의 요소를 하나하나 for문처럼 접근할 수 있다. 가독성이 직관적이다.
const sum = numbers.reduce((total, value) => total + value)

console.log(sum);
// 100

const average = numbers.reduce((total, value, index, array) => {
  total += value;
  if( index === array.length -1 ) {
    return total / array.length
  } else {
    return total
  }
})

console.log(average);
// 25