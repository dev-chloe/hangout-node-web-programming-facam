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
