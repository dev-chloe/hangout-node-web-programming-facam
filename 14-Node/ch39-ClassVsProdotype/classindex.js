'use strict';

class fullStack {
  constructor(backend, frontend) {
    // await 는 constructor에서 사용할 수 없다.
    this.backend = backend;
    this.frontend = frontend;
  }

  getBackend() {
    return this.backend;
  }
  getFrontend() {
    return this.frontend;
  }

  setBackend(backend) {
   this.backend = backend;
  }
  setfrontend(frontend) {
    this.frontend = frontend;
  }
}

const Fullstack = new fullstack('js', 'javascript');
Fullstack.getBackend();
Fullstack.getfrontend();