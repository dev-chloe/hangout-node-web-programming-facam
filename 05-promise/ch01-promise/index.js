const promiseFun = new Promise(( resolve, reject) => {
  resolve( console.log('promise start'));
});

promiseFun.then(() => {
  console.log('promise fin');
});

const wait1sec = new Promise(( resolve, reject) => {
  console.log('start');
  setTimeout(() => {
    resolve(console.log('waited 1sec'))
    reject(console.log('error'))
  }, 1000);
});

wait1sec.then(() => {
  console.log('promise fin');
});