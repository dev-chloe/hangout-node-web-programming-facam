'use strict';

// 일반 함수
function add(var1, var2) {
  return var1 + var2
}

// 화살표 함수
const addArrowFun = (var1, var2) => (var1 + var2)

console.log(addArrowFun(1,2))
// 3

// 예제
API.prototype.get = function(resource) {
  var self = this;
  return new Promise(function(resolve, reject) {
    HTMLOutputElement.get(self.uri + resource, function(data) {
      resolve(data);
    })
  })
}

// arrow function으로 변경
API.prototype.get = (resource) => {
  new Promise((resolve, reject) => {
    HTMLOutputElement.get(this.uri + resource, (data) => {
      resolve(data);
    })
  })
}
