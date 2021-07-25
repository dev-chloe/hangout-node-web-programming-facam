## Ch03. 반복문

### 1.for문

 ```javascript
for(var i=0; i<5; i=i+1) {
  document.write('화면에 출력하다 <br/>')
}
// for ( 초기화; 비교; 더하기 )
// 순서
// 초기화 > 비교 > 실행 > 더하기
 ```

### 2.while문

```javascript
// 초기화
var i = 0;
while(i<5) {
  document.write('화면에 출력하다 <br/>')
  i = i + 1
}
// i < 5 가 true 라면 실행이 된다.
```

### 3.do_while문

```javascript
// 초기화
var i = 0;
do {
  document.write('화면에 출력하다 <br/>')
  i = i + 1
} while(i<5)
// do를 먼저 실행을 하고 제한 조건을 확인한다.
```

* while과 do_while의 차이

```javascript
var i = 0;
while(i<0) {
  document.write('화면에 출력하다 <br/>')
  i = i + 1
}
// 아무 것도 화면에 출력되지 않는다.

var i = 0;
do {
  document.write('화면에 출력하다 <br/>')
  i = i + 1
} while(i<0)
// 화변에 한 번 출력된다.
```  

### 4.구구단

```javascript
for( var i=2; i<=9; i++ ) {
  for( var j=1; j<=9; j++) {
    document.write(i+'x'+j+'='+i*j+'<br/>')
  }
    document.write('<br/>')
}
```