'use strict';

class cacheManager {
  constructor() {
    this.config = []
  }
}

const CacheManager = new cacheManager()

class Robot {
  constructor(name) {
    this.name = name;
    // constructor에서는 초기 값을 받을 수 있다.
  }

  speak() {
    console.log(`${this.name}`)
  }
}

class Ai extends Robot {
  constructor(name) {
    super(name)
    // super는 상위 클래스의 생성자를 호출하는 기능이다
  }
  walk() {
    console.log(`walk: ${this.name}`)
  }
}


const r = new Robot('hi');
r.speak();
// hi

const a = new Ai('hey');
a.speak();
// hey
a.walk();
//walk: hey
