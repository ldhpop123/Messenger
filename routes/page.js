const express = require('express');
const router = express.Router(); // 라우터 객체 생성

// 랜더링 컨트롤러 함수들 가져오기
const { renderMain } = require('../controllers/page'); // 구조 분해 할당으로 renderMain 함수 가져오기

// 컨트롤러와 연결
router.get('/', renderMain);

module.exports = router;
