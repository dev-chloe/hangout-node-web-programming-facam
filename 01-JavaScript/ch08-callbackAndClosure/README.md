## Ch08. 콜백함수 및 클로저

### 1.콜백함수  
- 인자로 함수로 넘겨준다.
- 인자로 받은 콜백을 바로 실행할 수도 있고, 필요에 따라 나중에 실행하거나 실행하지 않을 수도 있다.
- 어떤 로직이 진행되다가 나중에 호출 될 로직을 담고 있는 함수를 콜백이라고 한다.  

```javascript
function test(num, callback) {
  callback();
  console.log(num);
}

test(1, function() {
  console.log('콜백함수가 실행됩니다.')
})
// 콜백함수가 실행됩니다.
// 1
```


### 2.클로저
- 외부 함수의 실행이 종료 되어도 외부 함수 범위에 접근할 수 있는 내부 함수
- 함수 내에서 변수를 메모리처럼 사용할 수 있다.  

```javascript
function ex_cl() {
  var num = 0;
  return function() {
    num++;
    console.log(num);
  }
}

var test = ex_cl();
test();
test();
// 1
// 2
```

> JS에서 함수는 값으로 취급되기 때문에 함수를 parameter로도 받을 수 있고(Callback), 함수를 return할 수도 있다(Closure).