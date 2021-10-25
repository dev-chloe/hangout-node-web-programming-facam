'use strict';

const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(data);
})

const content = "hi this is chloe."
fs.writeFile('test.txt', content, err => {
  if(err) {
    console.log(err)
    return
  }
  console.log('success');
})