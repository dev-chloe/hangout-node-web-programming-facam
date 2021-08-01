## Ch10. jQuery

### 1.jQuery  
- 요즘은 지양하는 추세

```javascript
// jQuery에 대한 이해
function $(selector) {
  var click = function(callback) {
    callback();
  }
  return {
    click : click
  }
}

$('#num').click(function () {
  console.log('123')
})
```

[예제](./index.html)