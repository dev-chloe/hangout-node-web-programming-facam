## Ch01. MongoDB

### 1. MongoDB 란
- MongoDB는 NoSQL로 분류되는 크로스 플랫폼 **도큐먼트 지향** 데이터베이스 시스템이다. 
- MySQL 처럼 전통적인 테이블-관계 기반의 RDBMS가 아니며 **SQL을 사용하지 않는다.**
- MongoDB는 MySQL의 테이블과 같은 스키마가 고정된 구조 대신 JSON 형태의 동적 스키마형 문서를 사용하는데, 이를 MongoDB 에서는 **BSON** 이라고 부른다.

  #### 1. Key Value 형태로 저장한다  

  ```yaml
  {
    "name": "여성워커",
    "price": 1200
  }
  ```

  #### 2. 동적 스키마 
  - 독립적으로 구조가 제한이 없다.
  ```yaml
  {
    "name": "여성워커",
    "price": 1200
  },
  {
    "thumbnail": "abc.png"
  }
  ```
  > 정적 스키마는 예로 mysql이 있다. 테이블 구조를 쉽게 바꿀 수가 없다.

#### RDMS와 비교
|     RDMS     |   MongoDB  |  
| :----------: | :--------: | 
| Database     | Database   | 
| Table        | Collection | 
| Row          | Document   | 
| Column       | key/field  |   
| Priamary Key | ObjectID   |  

```bash
# HomeBrew Tap 등록
brew tap mongodb/brew

# MongoDB 설치
brew install mongodb-community

# 서비스 등록
brew services start mongodb-community

# 프로세스 확인
ps aux | grep -v grep | grep mongod
```

