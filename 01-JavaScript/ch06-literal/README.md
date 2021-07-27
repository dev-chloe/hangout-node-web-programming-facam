## Ch06. 리터럴객체

### 1.리터럴객체  
- 가장 일반적인 자바스크립트의 객체 생성 방식이다.
- 리터럴 객체는 0개 이상인 객체 속성명 및 관련값 쌍 목록이 콤마로 분리되어 **중괄호({})** 로 묶인 형태이다.
- **키: 값** 쌍 목록으로 간편하게 표기한다. (가독성을 높여준다.)

```javascript
var cat = {} 
// 빈 객체, 자신의 프로퍼티와 메소드를 가지지 않았을 뿐, object.prototype을 상속 받기에 내장 객체의 프로퍼티와 메소드를 가진다.

var a = {
  'a': 110,
  'b': 'hey',
  'c': function() {
    console.log('literal')
  }
}
console.log(a.b) // hey
console.log(typeof a); // object
```