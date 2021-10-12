// queue FIFO

const queue = [];
queue.push(1);
queue.push(2);
console.log(queue)
// [ 1, 2 ]

const r = queue.shift()
console.log(r)
// 1

const d = queue.shift()
console.log(d)
// 2


// STACK

const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);
// [ 1, 2 ]

var s = stack.pop();
console.log(s);
// 2