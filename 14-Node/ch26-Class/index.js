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
  }

  speak() {
    console.log(`${this.name}`)
  }
}

const r = new Robot('hi');
r.speak()
// hi

// constructor에서는 초기 값을 받을 수 있다.