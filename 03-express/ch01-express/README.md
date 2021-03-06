## Ch01. Express 시작

### 1. Express  
- Node.js를 위한 웹 프레임워크의 하나이다.  
- Node.js의 사실상의 표준 서버 프레임워크로 불리고 있다.  

```plaintext
- HTTP 통신 요청(Request; GET, POST, DELETE 등)에 대한 핸들러를 만든다.
- 템플릿에 데이터를 넣어 응답(response)을 만들기 위해 view의 렌더링 엔진과 결합(integrate)한다. 
- 접속을 위한 포트나 응답 렌더링을 위한 템플릿 위치같은 공통 웹 어플리케이션 세팅을 한다. 
- 핸들링 파이프라인(reqest handling pipeline) 중 필요한 곳에 추가적인 미들웨어 처리 요청을 추가한다.
```

#### http 상태 코드  

|  상태 코드  | 설명                         |  
| :-------: | ----------                  | 
| 1XX       | 조건부 응답                    |    
| 2XX       | 응답 성공                     |  
| 3XX       | 리다이렉션                     |  
| 4XX       | 요청 오류 (ex. 404 Not Found) |  
| 5XX       | 서버 오류                     |  


### 2. nodemon  
- 서버 코드를 변경 할 때다 서버를 재시작 하는 번거로움을 덜기 위해서 나온 도구
- 자동으로 서버를 재시작해준다.  

### 3. REST API  
```yaml
GET /users : 사용자정보
POST /users : 사용자추가
GET /users/(ID) : 사용자 한명만 볼 때
PUT /users/(ID) : 사용자 한명 수정하기
DELETE /users/(ID) : 삭제
```