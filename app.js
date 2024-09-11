const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport')

// .env 파일에 정의된 환경 변수들 로드
dotenv.config();
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth')
const { sequelize } = require('./models');

// express 모듈 애플리케이션
const app = express()
app.set('port', process.env.PORT || 8003);
app.set('view engine', 'html');
// nunjucks 설정
nunjucks.configure('views', {
    express: app, // express 연결
    watch: true, // 템플릿이 변경되면 리로드
});
// 데이터베이스와 동기화 수행
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly:  true,
        secure: false,
    },
}));

// passport
app.use(passport.initialize());
app.use(passport.session());

// 라우터
app.use('/', pageRouter);
app.use('/auth', authRouter); 

// 요청한 라우터가 없으면 404
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`)
    error.status = 404;
    next(error);
})

// 에러처리 미들웨어
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; // 개발 환경에서만 에러 스택 노출
    res.status(err.status || 500);
    res.render('error');
});

// 서버시작하고 대기
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
});