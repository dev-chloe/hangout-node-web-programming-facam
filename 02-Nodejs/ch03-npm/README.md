## Ch03. npm

### 1.npm  
- node package manager

```bash
# package.json 생성하는 방법
npm init -y

# 다운 받을 때
npm install [name]
```

```javascript
// node module에서 불러올 때 경로 없음
const getsomething = require('something')

// 내가 만든 파일에서 불러올때 경로 있음
const getsomething = require('./something')
```

### 2.package.json
- node module이 없어도 package.json에서 필요한 패키지를 확인하여 다운 받게 된다.
- npm update를 통해 업데이트를 한다

### 3.package-lock.json
- 각각 라이브러리의 하위에 참조하는 라이브러리가 명시되어 있다.
- 모듈 충돌을 방지한다.