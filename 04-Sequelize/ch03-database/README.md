## Ch03. database

### 1. mysql container 이미지 빌드

```bash
cd 04-Sequelize/ch03-database
docker build -t simple-mysql .

# 결과 확인
docker image ls | grep simple-mysql
# simple-mysql   latest    7604374c09f0   23 hours ago   447MB
```

### 2. mysql container 실행

```bash
DEV_PW=local-admin
docker run -d \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=$DEV_PW \
  --name simple-mysql \
  simple-mysql \
  --default-authentication-plugin=mysql_native_password

# check 
docker container ls
#CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
#19309654caeb   simple-mysql   "docker-entrypoint.s…"   6 seconds ago   Up 5 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   simple-mysql

docker container ls | grep simple-mysql
# 19309654caeb   simple-mysql   "docker-entrypoint.s…"   57 seconds ago   Up 56 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   simple-mysql
```

- 접근 정보
  - host: `localhost`
  - port: `3306`
  - user: `root`
  - password: `local-admin`

- 확인용 sql
  ```sql
  SHOW DATABASES;

  USE exercise;

  SHOW TABLES;

  SELECT * FROM user;
  ```

### 3. mysql container 정지

```bash
docker stop simple-mysql
```

### 4. mysql container 재실행

```bash
docker start simple-mysql
```

### 5. mysql container 제거

```bash
docker stop simple-mysql
docker rm simple-mysql
```

<!-- 
* Check later 
https://medium.com/mr-leo/using-sequelize-mysql-docker-image-for-development-d13e4eeb3d76
-->
