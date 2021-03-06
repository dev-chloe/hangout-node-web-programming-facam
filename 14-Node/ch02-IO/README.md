## Ch02. IO

### 1. IO
- I/O(Input/Output)
- 사용자가 요청(input)을 하면 그에 대한 output을 내는 것
- 네트워크 IO 요청을 통해서 input output을 웹 서버가 처리하게 된다.
- 렉이나 로딩도 I/O 과정 중에 하나이다.
- I/O가 가장 기본적인 서버 성능을 측정하는데 가장 중요한 요소중 하나이다.

### 2. 비동기 vs 동기
- 동기: 동기는 말 그대로 동시에 일어난다는 뜻으로 요청과 그 결과가 동시에 일어난다는 약속이다.  
바로 요청을 하면 시간이 얼마가 걸리던지 요청한 자리에서 결과가 주어져야 한다.
  - 요청과 결과가 한 자리에서 동시에 일어남
  - A노드와 B노드 사이의 작업 처리 단위(transaction)를 동시에 맞추겠다.  

- 비동기: 비동기는 동시에 일어나지 않는다를 의미로 요청과 결과가 동시에 일어나지 않을거라는 약속이다.  
완료되는 시점을 맞추지 않는다. 
비동기화된 작업을 처리하기 위해서 node.js는 Event Loop라는 개념을 제시한다.(v8)
  - 요청한 그 자리에서 결과가 주어지지 않음
  - 노드 사이의 작업 처리 단위를 동시에 맞추지 않아도 된다.

### 3. Non-blocking vs blocking
- blocking: 해당하는 코드가 작업이 완료될 때까지 지연된다.
- Non-blocking: 어떠한 코드가 작업이 완료될 때까지 기다리지 않고 다른 작업을 같이 수행하거나 병렬적으로 수행을 한다.
- javascript는 non-blocking인 이유는 해당하는 작업들이 비동기적으로 수행되기 때문이다.
- javascript는 이벤트 주도 방식의 개발언어이다.
- 이벤트 주도 방식: 사용자의 클릭, 입력에 반응하도록 설계됨. 콜백 형식으로 처리함.
- 스레드 풀 기반의 방식: 사용자가 스레드가 끝날때까지 기다려야됨.