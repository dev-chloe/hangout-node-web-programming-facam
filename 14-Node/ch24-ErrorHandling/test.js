// a;
// ReferenceError: a is not defined
// console.log('a');
// a를 정상적으로 출력하게 만들기

try {
  a;
} catch (e) {
  console.log('a');
  // a
}