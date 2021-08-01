## Ch11. ES6

### 1.ES6  
- 변수 
  ```plaintext
  const - 상수, 재지정이 불가능 
  let - 지역변수, 재지정 가능
  ```
  
  - const  

    ```javascript
    const a = 10;
    a = 20; 
    // 에러출력
    // Uncaught TypeError: Assignment to constant variable.
    ```
  
  - let  

    ```javascript
    let b = 1;
    if(true) {
      let b = 2;
      console.log(b) // 2
    }
    console.log(b) // 1
    ```

  - 템플릿 변수  

    ```javascript
    const arr = 'world'
    console.log('arr은 ' + arr); // arr은 world
    console.log(`arr은 ${arr}`); // arr은 world
    ```

- 화살표 함수(arrow function)   
  - this를 바인딩 해준다.

  ```javascript
  var func1 = function(a,b) {
    return a+b;
  }

  // arrow function
  var func1 = (a,b) => {
    return a+b;
  }
  var func1 = (a,b) => return a+b;

  const [d,e,f] = [1,2,3];
  console.log(3); //2 
  ```

- 할당  

  ```javascript
  const [d,e,f] = [1,2,3];
  console.log(3); //2 
  ```

- Spread Operator (스프레드 연산자 또는 전개구문)

  ```javascript
  const arr1 = [1,2];
  const arr2 = [3,4,5];
  const arr3 = [...arr1, ...arr2];

  console.log(arr3); // [1,2,3,4,5]

  function abc(a, b) {
    console.log(arguments[0]); // no
    console.log(b[0]); // yes?
  }

  abc('no', 'yes?', 'nono', 2);
  ```
