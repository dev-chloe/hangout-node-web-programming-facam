## Ch25. ErrorHandling

### 1. ErrorHandling
- 코드 가독성을 높인다.
- 함수가 어떻게 호출되었는지에 따라 바인딩할 객체가 결정되는 일반함수와는 달리, 화살표함수의 this는 화살표함수가 호출되는 시점과는 무관하게 선언되는 시점에 결정되며 언제나 상위 스코프의 this를 가리킨다.
- 화살표함수에는 this와 argument가 없기 때문이다.

[ex](./index.js)
[test](./test.js)