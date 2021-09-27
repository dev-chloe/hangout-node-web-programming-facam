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

```bash
# Error: Your Command Line Tools are too outdated.
# Update them from Software Update in System Preferences or run
softwareupdate --all --install --force 

# If that doesn't show you any updates, run:
sudo rm -rf /Library/Developer/CommandLineTools
sudo xcode-select --install
```
  

```bash
# 데이터베이스 생성
> use exercise;
  switched to db exercise

# 한 줄 삽입
> db.person.insert({"name": "fastcaplus", "lecture":"nodejs"});
  WriteResult({ "nInserted" : 1 })

# 여러 줄 삽입
> db.test.insert([
    {"name": "fastcampus", "lecture":"nodejs"},
    {"name": "house", "lecture":"python"},
    {"name": "popo", "lecture":"python test"}
  ]);
 BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 3,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
  })

# 데이터베이스 삭제
> db.dropDatabase();
  { "ok" : 1 }

# 조회하기
> db.board.find();
  { "_id" : ObjectId("6151cae00c983977c3baa936"), "title" : "Hello", "content" : "첫번째글입니다.", "writer" : "admin", "hit" : 2 }
  { "_id" : ObjectId("6151cae00c983977c3baa937"), "title" : "Hi", "content" : "두번째 글입니다.", "writer" : "admin", "hit" : 23 }
  { "_id" : ObjectId("6151cae00c983977c3baa938"), "title" : "test", "content" : "세번째 글입니다.", "writer" : "test", "hit" : 10 }

# 보기 좋은 조회
> db.board.find().pretty();
  {
          "_id" : ObjectId("6151cae00c983977c3baa936"),
          "title" : "Hello",
          "content" : "첫번째글입니다.",
          "writer" : "admin",
          "hit" : 2
  }
  {
          "_id" : ObjectId("6151cae00c983977c3baa937"),
          "title" : "Hi",
          "content" : "두번째 글입니다.",
          "writer" : "admin",
          "hit" : 23
  }
  {
          "_id" : ObjectId("6151cae00c983977c3baa938"),
          "title" : "test",
          "content" : "세번째 글입니다.",
          "writer" : "test",
          "hit" : 10
  }

# 조건을 넣은 조회
> db.board.find( { "writer" : "admin" } ).pretty();
  {
          "_id" : ObjectId("6151cae00c983977c3baa936"),
          "title" : "Hello",
          "content" : "첫번째글입니다.",
          "writer" : "admin",
          "hit" : 2
  }
  {
          "_id" : ObjectId("6151cae00c983977c3baa937"),
          "title" : "Hi",
          "content" : "두번째 글입니다.",
          "writer" : "admin",
          "hit" : 23
  }
> db.board.find( { "writer" : "admin" , "title" : "Hello" } ).pretty();
  {
          "_id" : ObjectId("6151cae00c983977c3baa936"),
          "title" : "Hello",
          "content" : "첫번째글입니다.",
          "writer" : "admin",
          "hit" : 2
  }

# 조회수 > 20 조회
> db.board.find( { "hit" : { $gt : 20 }} ).pretty()

# 조회수 < 20 조회
> db.board.find( { "hit" : { $lt: 20 }} ).pretty()

# 5 < 조회수 < 20
> db.board.find( { "hit" : { $gt : 5 , $lt:20 }} ).pretty()
```

#### 비교 연산자
| 연산자 |          설명           |  
| :--: | :--------------------  | 
| $eq  | = 일치하는 값             | 
| $gt  | 큰 값                   | 
| $get | 크거나 같은               | 
| $lt  | 작은                    |   
| $lte | 작거나 같은               |  
| $ne  | != 일치하지 않는 값        |  
| $in  | 배열 안에 속하는 경우       |  
| $nin | 배열 안에 속하지 않는 경우   |  

#### Collection 생성
| 속성       |                        설명                         |  
| :--:      | :------------------------------------------------  | 
| capped    | true로 하면 용량초가시 오래된 데이터를 덮어버림. size 입력 필수 | 
| autoIndex | ObjectId에 indexing 적용함                           | 
| sixe      | Collection의 최대 사이즈                              | 
| max       | Collection의 추가할 수 있는 최대 갯수                    | 

```bash
# 개수
> db.board.find().count()

# 내림차수
> db.board.find().sort( { "hit" : -1 })

# 두개를 자르기
> db.board.find().limit(2)

> db.board.find().skip(1)

# 업데이트 전체가 덮어 씌워짐
> db.board.update({ "title" : "test" } , {  "content": "content update!" } );
  {
          "_id" : ObjectId("6151cae00c983977c3baa938"),
          "content" : "content update!"
  }

# 원하는 부분만 업데이트
> db.board.update(
      { "title" : "Hello" } , 
      { 
          $set : {  "content": "content update!" }
      }
  );
  {
        "_id" : ObjectId("6151cae00c983977c3baa936"),
        "title" : "Hello",
        "content" : "content update!",
        "writer" : "admin",
        "hit" : 2
  }

# 삭제
> db.board.remove({ "writer" : "admin" })
  WriteResult({ "nRemoved" : 2 })
```