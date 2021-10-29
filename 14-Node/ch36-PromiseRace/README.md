# Ch36. Promise.Race

### 1. PromiseRace
- Promise.all()이 실행한 모든 프로미스들의 결과값을 배열로 받는 것과 다르게 Promise.race()는 가장 빨리 응답을 받은 결과값만 resolve한다.

- [ex](./index.js)  