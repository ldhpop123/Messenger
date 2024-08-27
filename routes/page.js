const express = require('express');
const router = express.Router(); // 라우터 객체 생성

// 랜더링 컨트롤러 함수들 가져오기
const { renderMain, loginPage, joinPage  } = require('../controllers/page'); // 구조 분해 할당으로 renderMain 함수 가져오기
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

// 컨트롤러와 연결
router.get('/', isLoggedIn, renderMain);

router.get('/login', isNotLoggedIn, loginPage);
router.get('/join', isNotLoggedIn, joinPage);



module.exports = router;
