CREATE DATABASE IF NOT EXISTS `exercise` DEFAULT CHARACTER SET utf8mb4;
-- utf8mb4 이모지까지 포함하는 국제인코딩 표준규격 

USE `exercise`;

CREATE TABLE IF NOT EXISTS `user`
(
  id        MEDIUMINT     NOT NULL AUTO_INCREMENT COMMENT "회원 번호",
  email     VARCHAR(100)  NOT NULL COMMENT "회원 메일 - 로그인 사용",
  password  VARCHAR(512)  NOT NULL COMMENT "회원 암호",
  nickname  VARCHAR(20)   DEFAULT "Nickname" COMMENT "회원 별칭",
  created   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id)
  -- PRIMARY KEY 유니크한 키를 넣는것
  -- https://ko.wikipedia.org/wiki/%EA%B8%B0%EB%B3%B8_%ED%82%A4
)
ENGINE=INNODB
-- INNODB mysql에서 테이블에 crud 작업할 때 기본적으로 사용하는 엔진

COMMENT="회원";