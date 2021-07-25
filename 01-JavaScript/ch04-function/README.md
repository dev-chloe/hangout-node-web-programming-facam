## Ch04. 함수

### 1.함수

#### 1. input이 있는 경우

```javascript
function test(a) {
  console.log(a)
}
test(10);
// 10 
```

#### 2. output이 있는 경우

```javascript
function sum(a, b) {
  return a + b
}
var c = sum(10, 20);
console.log(c);
// 30
```

#### 3. input이 없는데 output이 있는 경우

```javascript
function sum() {
  return 'sum 함수를 호출했나요'
}
var c = sum();
console.log(c);
// sum 함수를 호출했나요
```

#### 3. input이 없는데 output도 없는 경우

```javascript
function sum() {
  console.log("sum 함수를 호출했나요????")
}
var c = sum();
// sum 함수를 호출했나요????
```

#### 5.익명함수

```javascript
var sum = function() {
  console.log("sum 함수를 호출했나요????!!")
}
var c = sum();
// sum 함수를 호출했나요????!!
```

```javascript
function Car(a, b, c) {
  this.name = a;
  this.color = b;
  var move = c;
}
var myNewCar = new Car("현대", "빨강", "전진")
console.log(myNewCar.name) // 현대
console.log(myNewCar.color) // 빨강
console.log(myNewCar.move) // undefined

// this는 퍼블릭 변수, var는 프라이빗 변수
```