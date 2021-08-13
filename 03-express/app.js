const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
})

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.use('/uploads', express.static('uploads'));
// app.use( 'url', express.static('폴더명'))

app.get('/', (req,res) => {
    res.send('express start');
});

function vipMiddleware(req, res, next) {
    // console.log('최우선 미들웨어');
    next();
}

app.use('/admin', vipMiddleware, admin );
app.use('/contacts', contacts );

app.listen( port, () => {
    console.log('Express listening on port', port);
}); 

/*
app.js 의 미들웨어가 먼저 나오고
admin.js의 미들웨어가 나온다

- 미들웨어 순서 결과
  최우선 미들웨어
  첫번째 미들웨어
  두번째 미들웨어
*/