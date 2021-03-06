## Ch01. JavaScript란

### 1.자바스크립트란
- 브라우저를 제어하기 위해 넷스케이프에서 개발한 언어
- 사용자의 클릭, 계산기, 달력, 팝업 등의 이벤트 조작에 대응하기 위한 언어
- 자바스크립트의 확대  
  ```plaintext
    1. AJAX 활용(구글맵)
    2. Debug 툴에 발전(firefox의 consloe.log가 가능하게 함)
    3. V8엔진의 개발
    4. Nodejs 등장
    5. Desktop, IOT, 사용범위 확대
    6. 여러 플랫폼 제작사에서 자바스크립트 개발자를 끌어 않기 위한 환경 조성
  ```
### 2. 자바스크립트의 자료형
  - var로 선언한다.(var c=23;)
  - 동적언어 이므로 자료형을 선언할 필요가 없다. (정적언어(C,C++)는 선언을 먼저 하여야한다. )
  - 기본자료형과 객체(Object) 두가지로 나뉜다. (대분류)

| 기본 자료형  | 설명                                |  
| :-------: | :----------:                        | 
| boolean   | 논리적인 요소를 나타냄 (true, false)     | 
| null      | 객체 값이 존재하지 않는 것을 의미          | 
| undefined | 값을 할당하지 않음                      | 
| number    | 숫자형                               |   
| string    | 문자형                               |  
| symbol    | ECMAScript 6에서 추가, 유일하고 변경 불가 |  