## Ch30. Generator

### 1. Generator
- 제너레이터(generator)를 사용하면 여러 개의 값을 필요에 따라 하나씩 반환(yield)할 수 있다.
- 제너레이터에서는 arrow function을 사용하지 않고 명시적으로 function*로 선언한다.
- 제너레이터 객체의 next()가 호출되면 그제서야 실행을 시작하여 처음 만나는 yield에서 호출자에 값을 전달하면서 실행을 멈춘다.

- [ex](./index.js)  