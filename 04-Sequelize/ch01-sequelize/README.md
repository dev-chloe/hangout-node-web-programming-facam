## Ch01. Sequlize 란?

### 1. Sequlize 란?  
- ORM(Object-Relational Mapping)은 객체지향 패러다임을 활용하여 관계형 데이터베이스(RDB)의 데이터를 조작하게 하는 기술이다.  
- 쿼리를 작성하지 않고도 객체의 메서드를 활용하는 것처럼 쿼리 로직을 작성할 수 있다.  
- Sequelize Node.js의 대표적인 ORM이다.  

```bash  
# 작성
models.테이블명.create(데이터) 

# 조회
models.테이블명.findAll(조회조건)
models.테이블명.findByPk(Primary key)
models.테이블명.findOne(조회조건)

# 수정
models.테이블명.update(데이터, 조회조건)

# 삭제
models.테이블명.destory(조회조건)
```