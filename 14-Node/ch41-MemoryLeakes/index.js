'use strict';

// 불필요한 메모리 할당
function study(value1, value2) {
  this.value1 = value1;
  this.value2 = value2;

  // 문제 1. prototype을 하지 않고 함수를 정의했다.
  // 문제 2. 화살표 함수 사용하여 상위에 정의된 객체 속성에 대해서 접근할 수 있다.
  this.func1 = () => {
    console.log
  }
}

const problem = new study(undefined, undefined);
problem.func1();

/* 
- 문제 1 why? 
함수는 최상위 객체로 정의되어 this에 키워드로 변수를 갖고 함수를 받을수 있고
함수가 클로저로 정의가 된다.
fun1이 fun1을 가지게 되어 클로저 안에 또다른 클로저를 가지게 된다.
그렇게 되면 메모리 상에 계속 남아서 메모리 누수를 일으킨다.
- 문제 2 why?
화살표 함수가 아니라 일반 함수면 this에 접근 할 수 없게 된다.
화살표 함수만이 this의 컨텍스트는 글로벌 객체이기 때문이다.
*/