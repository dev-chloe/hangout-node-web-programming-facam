## Ch27. Class Extends

### 1. ClassExtends
- extends 키워드는 클래스를 다른 클래스의 자식으로 만들기 위해 class 선언 또는 class 식에 사용된다.
- 겉보기에는 extends를 통해 class 기반으로 상속을 받는 것으로 표기하지만, javascript는 prototype 기반의 언어이기 때문에 사실 내부적으로는 prototype chain을 이용해 상속이 이뤄진다.
- extends는 내장 객체뿐만 아니라 사용자 정의 클래스를 하위 클래스로 만들기 위해 사용될 수 있습니다.
- 기존에 모듈화된 기능들을 재활용하는 장점이 있다.

- [ex](./cache.js)  