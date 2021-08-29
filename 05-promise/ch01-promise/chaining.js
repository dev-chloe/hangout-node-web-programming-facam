const p1 = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve({ p1_text : 'p1의 텍스트' })
  }, 1000);
})
const p2 = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve({ p2_text : 'p2의 텍스트' })
  }, 3000);
})
const p3 = new Promise( (resolve, reject) => {
  setTimeout(() => {
    reject("error")
  }, 3000);
})

p1.then( (result) => {
  console.log("p1 = " + result.p1_text);
  return p2;
}).then( (result2) => {
  console.log("p2 = " + result2.p2_text);
})

Promise.all( [p1, p2, p3] ).then((resultAll) => {
  console.log("p1 = " + resultAll[0].p1_text);
  console.log("p2 = " + resultAll[1].p2_text);
}).catch(err => {
  console.log(err)
})