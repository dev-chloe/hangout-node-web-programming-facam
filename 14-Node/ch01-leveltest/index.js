'use strict'

const obj = {
  title: 'node.js 올인원 패키지'
}

function isEmptyObj () {
  if(obj.title) {
    return true;
  } else {
    return false;
  }
}

isEmptyObj();

const isEmptyObjArrow = () => {
  obj.title ? true : false;
}

isEmptyObjArrow ();