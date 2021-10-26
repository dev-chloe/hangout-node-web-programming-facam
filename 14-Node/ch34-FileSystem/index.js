'use strict';

const fs = require('fs');
const { promisify } = require('util');

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const writeAndRead = async (data = '') => {
  try {
    await write('test.txt', data);
    // const content = await read('test.txt');
    // return content;
    return (await read('test.txt'))
  } catch(e) {
    console.error(e);
  }
}

writeAndRead('this is right');

/*
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
*/