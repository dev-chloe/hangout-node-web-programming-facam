'use strict';

function fullstack(backend, frontend) {
  this.backend = backend;
  this.frontend = frontend;

  fullstack.prototype.getBackend = () => this.backend;
  fullstack.prototype.setBackend = () => this.backend = backend;

  fullstack.prototype.getfrontend = () => this.frontend;
  fullstack.prototype.setfrontend = () => this.frontend = frontend
}

const Fullstack = new fullstack('javascript', 'javascript');
Fullstack.getBackend();
Fullstack.getfrontend();