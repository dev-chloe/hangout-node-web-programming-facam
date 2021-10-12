## Ch09. ModuleExports

### 1. ModuleExports

```bash
function edit() {}
function write() {}

# 단일 함수 또는 단일 클래스에 대해서만 exports할 때
module.exports = edit

# 두 가지 이상을  exports할 때
module.exports = {
  edit,
  write
}

# class exports
class ubdate {

}

module.exports = update;

# 환경 설정과 같은 외부의 데이터에서 접근하기 위해서 
module.exports = {
  id: '',
  token: '',
  fn: ()=> {
  	console.log('this is a function')
  }
}
# 외부 환경 변수와 같은 데이터들을 confif 파일로 표현하기 좋다.
# string 뿐만 아니라 함수도 선언해서 exrpots 가능하다.
```