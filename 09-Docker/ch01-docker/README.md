## Ch01. Docker

### 1. Docker 개요
- 도커(Docker)는 전세계적으로 사용되고 있는 컨테이너 가상 플랫폼이다.
- VM웨어 > 호스트 OS위에 가상 OS를 올린다.
- 도커 > 호스트 OS와 시스템 자원을 공유한다.  
  따라서 VM웨어 보다 빠르다.
- 이미지를 만들고 dockerhub를 통해 github 처럼 pull push 가능하다.

```yaml
- 도커 이미지: 우분투 + nodejs + express 등 실행할 서비스들을 패키지화 해놓음
- 컨테이너: 이미지를 토대로 서비스를 띄운다. 여러개의 컨테이너가 작동함
```
> 참조: [우분투 18.04 도커(Docker) 설치 방법](https://blog.cosmosfarm.com/archives/248/%EC%9A%B0%EB%B6%84%ED%88%AC-18-04-%EB%8F%84%EC%BB%A4-docker-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95/)


> docker: Error response from daemon: Conflict. The container name "..." is already in use by container "...".
> 참조: [docker: Error response from daemon: Conflict.](https://www.sysnet.pe.kr/2/0/12264)

