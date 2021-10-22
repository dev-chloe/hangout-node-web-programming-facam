'use strict';

class cacheManager {
  constructor() {
    this.config = []
  }

  addConfig(obj = {}) {
    this.config.push(obj)
  }

  getConfig() {
    return this.config
  }
}

module.exports = cacheManager;