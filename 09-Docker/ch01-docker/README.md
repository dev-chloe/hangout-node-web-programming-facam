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


### 2. Dockerfile로 이미지 만들기
1. index.html 생성
2. Dockerfile 생성

```dockerfile
# centOS 이미지를 기반으로 작성
FROM centos:7

# 아파치를 설치
RUN yum update -y
RUN yum install -y httpd

# 현재 폴더의 index.html파일을 아파치 첫화면으로 복사
COPY index.html /var/www/html

# Fix timezone issue
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 아파치 실행
RUN systemctl enable httpd

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
```
3. `docker build -t test .`
4. `docker images`
5. `docker run -d --name test-apache -p 80:80 test`
6. `docker container ls`
7. `docker container logs test-apache`
8. `docker container logs -f test-apache` (로그를 계속 보다가 종료할 때, ctrl+c)
9. `docker exec -it test-apache /bin/sh` (나올때는 exit // ctrl+p,q)

> 참조: [Docker를 이용한 Centos7 + httpd + php 5.4 개발환경 구축](https://ncube.net/centos7-httpd-php-54-development-environment-using-docker/)



### 3. Docker Compose
- Docker Compose는 다수의 컨테이너를 쉽게 운용하기 위한 도구이다.
- Docker Compose는 yaml 포맷으로 작성되며 여러 개의 컨테이너의 실행을 한 번에 관리를 할 수 있게 해준다.
- 명령어를 하나씩 입력하는 대신 파일 하나에 한 번에 입력해 간편히 사용할 수 있게 해준다.

```bash
# Docker Compose install
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# root 권한주기
sudo chmod +x /usr/local/bin/docker-compose

# docker-compose 버전 체크
docker-compose -v

# docker-compose 띄우기
docker-compose up

# docker-compose 내리기 
docker-compose down
```