## Ch01. Mysql

### 1. Mysql
- 전세계적으로 가장 널리 사용되고 있는 오픈 소스 데이터베이스이다
- 표준 데이터베이스 질의 언어 SQL(Structured Query Language)을 사용하는 개방 소스의 관계형 데이터베이스 관리 관리시스템(RDBMS)이다. 매우 빠르고, 유연하며, 사용하기 쉬운 특징이 있다.

#### DDL(Data Define Language)
- DDL 명령어란 데이터 정의어로써 테이블과 같은 데이터 구조를 정의하는데 사용된다.
- 데이터 구조를 정의함에 있어서 발생할 수 있는 이슈로 생성, 변경, 삭제, 이름 변경의 명령어도 함께 포함한다.

  1. CREATE
  - 테이블을 생성하거나 데이터베이스를 생성하는 명령어
    ```bash
    # 데이터베이스 생성 명령어
    CREATE DATABASE [dbname];
    
    # 데이터베이스 생성 및 속성 설정 명령어
    CREATE DATABASE [dbname]CHARACTER SET utf8mb4COLLATE utf8mb4_unicode_ci;

    # 테이블 생성 명령어
    CREATE TABLE [tablename] (
        [column_name1]INT PRIMARY KEY AUTO_INCREMENT,
        [column_name2]VARCHAR(255)NOT NULL,
        [column_name3] DATETIMENOT NULL,
    )CHARSET=utf8;
    ```

  2. DROP
  - 테이블을 삭제하거나 데이터베이스를 삭제하는 명령어
    ```bash
    # 데이터베이스 삭제 명령어
    DROP DATABASE [dbname];

    # 테이블 삭제 명령어
    DROP TABLE [table_name];
    ```

  3. ALTER
  - 테이블의 내용을 수정할 수 있도록 하는 명령어
    ```bash
    # 테이블에 컬럼 추가하기
    ALTER TABLE [table_name]ADD COLUMN [column_name] [column_type];
    
    # 테이블의 컬럼 타입 변경하기
    ALTER TABLE [table_name]MODIFY COLUMN [column_name] [column_type];
    
    # 테이블의 컬럼 이름 변경하기
    ALTER TABLE [table_name] CHANGECOLUMN [old_column_name] [new_column_name] [new_column_type];
    
    # 테이블의 컬럼 삭제하기
    ALTER TABLE [table_name]DROP COLUMN [column_name];
    
    # 테이블에 컬럼 인덱스 주기
    ALTER TABLE [table_name]DROP INDEX [index_name];
    
    # 테이블에 PRIMARY KEY 만들기
    ALTER TABLE [table_name]ADD PRIMARY KEY( column_name_on_this_table );
    
    # 테이블에 PRIMARY KEY 삭제하기
    ALTER TABLE [table_name]DROP PRIMARY KEY;
    
    # 테이블 명 바꾸기
    ALTER TABLE [old_table_name] RENAME [new_table_name];
    ```

  4. RENAME
  - 테이블의 이름을 변경하는 명령어
    ```bash
    # 테이블 이름 변경 명령어
    RENAMETABLE [old_table_name]TO [new_table_name];
    
    # 여러 테이블 이름 변경 명령어
    RENAMETABLE [old_table_name1]TO [new_table_name1], [old_table_name2]TO [new_table_name2];
    ```

  5. TRUNCATE
  - ML의 명령어인 DELETE와 DDL 명령어인 DROP과 비슷한 형태로, 데이터를 삭제하는 명령어
  - DML의 DELETE 명령어의 경우 WHERE문과 같은 조건문을 붙여서 원하는 곳만 삭제할 수 있습니다.
  - DDL의 DROP 명령어의 경우 테이블 혹은 데이터베이스를 모두 삭제하는 명령어입니다.
  - TRUNCATE는 **DROP 후 CREATE를 하는 특징** 을 가지고 있습니다. 
    ```bash
    # 테이블의 데이터 삭제 명령어
    TRUNCATE TABLE [table_name];
    ```

### DML(Data Manipulation Language)
- 데이터 조작어로 정의된 데이터베이스에 입력된 레코드를 조회하거나 수정하거나 삭제하는 등의 역할을 하는 언어이다
- 테이블에 데이터 검색, 등록, 수정, 삭제하는 데 사용하며 SELECT, UPDATE, DELETE, INSERT문 등이 있다.

  1. SELECT
  - 생성되어 있는 테이블에서 원하는 값을 선택하여 가져오고 싶을 때 사용하는 명령어
    ```bash
    # 기본 선택 명령어(table_name 테이블에서 모두 가져오기)
    SELECT *FROM [table_name];
    
    # WHERE문 포함 선택 명령어(table_name 테이블에서 name이 'chloe'인 값 가져오기
    SELECT *FROM [table_name]WHERE name='chloe';
    
    SELECT *FROM [table_name]WHERE name LIKE 'chloe';
    
    # 애매한 것도 모두 선택하는 명령어(table_name 테이블에서 name에 'hlo'가 들어가는 것 모두 가져오기)
    SELECT *FROM [table_name]WHERE name LIKE '%hlo%';
    
    # 선택 후 name 컬럼으로 오름차순 정렬하는 명령어(ASC 없어도 가능)
    SELECT *FROM [table_name]ORDER BY name;
    SELECT *FROM [table_name]ORDER BY name ASC;
    
    # 선택 후 name 컬럼으로 내림차순 정렬하는 명령어
    SELECT *FROM [table_name]ORDER BY name DESC;
    
    # 선택 후 여러 컬럼으로 정렬하는 명령어(우선순위 name > email)
    SELECT *FROM [table_name[ORDER BY name, email;
    ```

  2. INSERT
  - 생성되어 있는 테이블에 원하는 값을 삽입하는 기능을 가진 명령어
    ```bash
    # Table Example
    # CREATE TABLE testTable( idx INT PRIMARY KEY AUTO_INCREMENT,
    #                         name VARCHAR(255) NOT NULL,
    #                         email VARCHAR(255) NOT NULL
    #                       )CHARSET=utf8;
    
    # 테이블에 값을 삽입함
    INSERT INTO testTable(name, email )VALUES ('chloe','chloe@chloe.com');
    
    # idx는 AUTO_INCREMENT라 딱히 설정해주지 않아도 됨
    ```

  3. UPDATE
  - 생성되어 있는 테이블에 삽입되어 있는 값을 수정해주는 기능을 가진 명령어
    ```bash
    # Table Example
    # CREATE TABLE testTable( idx INT PRIMARY KEY AUTO_INCREMENT,
    #                         name VARCHAR(255) NOT NULL,
    #                         email VARCHAR(255) NOT NULL
    #                       )CHARSET=utf8;
    
    # idx가 1인 컬럼의 name을 변경함
    UPDATE testTableSET name='renamechloe' WHERE idx=1;
    
    # 전체 name을 변경함
    UPDATE testTableSET name='renamechloe';
    ```

  4. DELETE
  - 생성되어 있는 테이블에 삽입되어 있는 값을 삭제해주는 기능을 가진 명령어
    ```bash
    # Table Example
    # CREATE TABLE testTable( idx INT PRIMARY KEY AUTO_INCREMENT,
    #                         name VARCHAR(255) NOT NULL,
    #                         email VARCHAR(255) NOT NULL
    #                       )CHARSET=utf8;
    
    # idx가 1인 값을 삭제함
    DELETE FROM testTableWHERE idx=1;
    
    # testTable의 전체 값을 삭제함
    DELETE FROM testTable;
    ```