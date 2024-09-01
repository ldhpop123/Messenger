const express = require('express');
const router = express.Router(); // 라우터 객체 생성

const { login, join, logout } = require('../controllers/auth');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

router.get('/login', isNotLoggedIn, login);

router.get('/join', isNotLoggedIn, join);

router.get('/logout', isNotLoggedIn, logout);

module.exports = router;