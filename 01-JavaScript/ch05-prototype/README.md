## Ch05. 프로토타입

### 1.프로토타입
- JavaScript는 흔히 **프로토타입 기반 언어(prototype-based language)** 라 불린다.   
(모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 프로토타입 객체(prototype object)를 가진다는 의미)
- 프로토타입 체인(prototype chain): 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용할 수 있도록 하는 근간
- 상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자의 prototype이라는 속성에 정의되어 있다.
- JavaScript에서는 객체 인스턴스와 프로토타입 간에 연결이 구성되며 이 연결을 따라 프로토타입 체인을 타고 올라가며 속성과 메소드를 탐색한다.

```javascript
function Car(a, b) {
  this.name = a;
  this.color = b;
}

car.prototype.move = function() {
  console.log(this.name + "차이고" + this.color + "색입니다")
}

var myNewCar = new Car("현대", "빨강")
myNewCar.move();
// 현대차이고 빨강색입니다.
```

![](./MDN-Graphics-person-person-object-2.png)  
> 출처: https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes  

![](./prototype_object.png)  
> 출처: https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67

** [참조](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)