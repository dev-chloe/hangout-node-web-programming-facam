## Ch01. Redis

### 1. Redis 개요
- Remote Dictionary Server의 약자
- 메모리 기반의 “키-값” 구조 데이터 관리 시스템
- 모든 데이터를 메모리에 저장하고 조회하기에 빠른 Read, Write 속도를 보장하는 **비 관계형 데이터베이스** 이다.
- 서비스의 특성이나 상황에 따라 이걸 **캐시** 로 사용할 수도 있고,  **Persistence Data Storage** 로 사용할 수도 있다.

```bash
# 설치
brew install redis
```

#### 1-1. redis 데이터 타입
```plaintext

1. Strings
2. Lists
3. Sets
4. Hashes
```

#### 1-2. redis cli
```bash
set key value [EX seconds] [PX milliseconds] [NX|XX]
# set a 10
```
```yaml
- EX seconds: 만료시간을 초 단위로 설정
- PX milliseconds: 만료시간을 밀리초 단위로 설정
- NX: 값이 존재 하지 않을 경우에만 키 값에 값을 저장
- XX: 값이 존재할 경우에만 키 값에 덮어씀
```

```bash  
get key
# get a 
# "10"

# 값이 없을 때 (nil)
```

```bash  
EXPIRE key seconds [NX|XX|GT|LT]
# expire a 10

ttl a
# (integer) 1
```
```yaml
- NX: 키가 만료되지 않은 경우에만 만료 설정
- XX: 키에 기존 만료가 있는 경우에만 만료 설정
- GT: 새 만료가 현재 만료보다 클 때만 만료 설정
- LT: 새 만료가 현재 만료보다 작은 경우에만 만료 설정
```

```bash  
# 키 리스트 확인할 때
keys *

# 키 삭제
del key
```

```bash
# List에 왼쪽에 숫자 넣을 때
lpush num_lists 2
# (integer) 1
# List에 오른쪽에 숫자 넣을 때
rpush num_lists 3
# (integer) 1

# List 상태 확인
lrange num_lists 0 -1 # (전체 다 보여줘라)
# 1) "2"
lrange num_lists 0 0 # (0번째 보여줘)
# 1) "1"

# Lists는 중복을 허용한다
# ex) [1, 2, 3, 3]
```

```bash
# sets에 왼쪽에 숫자 넣을 때
sadd num_sets 1
# (integer) 1

# List 상태 확인
smembers num_sets 
# 1) "1"

# Lists는 중복을 허용하지 않는다
# ex) [1, 2, 3]
```

```bash
hmset key field value [field value ...]
# hmset fruit orange 2000 apple 1000

hmget fruit orange
# 1) "2000"

hmget fruit orange apple
# 1) "2000"
# 2) "1000"
```

```bash
# redis 실행 
docker run -p 6379:6379 redis 
```