# Ch35. Promise.All

### 1. PromiseAll
- 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 또는 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환한다. 
- 주어진 프로미스 중 하나가 거부하는 경우, 첫 번째로 거절한 프로미스의 이유를 사용해 자신도 거부한다.

- [ex](./index.js)  