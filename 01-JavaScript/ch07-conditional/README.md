## Ch07. 조건문

### 1.if문  

```javascript
var a = 5;
if(a < 10) {
  console.log('10보다 작습니다.')
}
// 10보다 작습니다.
```

#### 1. "=="과 "==="의 차이  

```javascript
var a = 5;
if(a == 5) {
  console.log('5입니다')
}
// 5입니다
if(a == "5") {
  console.log('5입니다')
}
// 5입니다
// "=="은 숫자 5, 문자 "5"를 구분하지 않고 비교를 한다.
if(a === 5) {
  console.log('5입니다')
}
// 5입니다
if(a === "5") {
  console.log('5입니다')
}
// 아무런 반응 없음
// "==="은 숫자 5, 문자 "5"를 타입까지 고려하여 비교를 하기 때문에 더욱 엄격하다.
```


### 2.switch문  
- 조건과 일치하는 case문을 실행한다.
- if문 보다 가독성이 좋다.

```javascript
switch( "yellow") {
  case "blue" :
    consloe.log('파란색입니다');
    break;
  case "red" :
    consloe.log('빨간색입니다');
    break;
  default :
    consloe.log('모든 벗어나는 조건');
    break;
}
// 모든 벗어나는 조건

switch( "blue") {
  case "blue" :
    consloe.log('파란색입니다');
    break;
  case "red" :
    consloe.log('빨간색입니다');
    break;
  default :
    consloe.log('모든 벗어나는 조건');
    break;
}
// 파란색입니다
```