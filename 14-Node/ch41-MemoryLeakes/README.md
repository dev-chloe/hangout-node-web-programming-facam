# Ch41. Memory Leakes

### 1. MemoryLeakes  
- 메모리 누수 현상
- 불필요한 메모리 정보를 메모리 상에 보존하면서 시스템 자원을 낭비하는 문제를 일으키는 것이 대표적인 현상이다.
- 메모리가 할당은 되었지만 비할당 과정을 거치지 않아서 메모리에 잔류하게 되는 경우가 있다.

- [ex](./index.js) 