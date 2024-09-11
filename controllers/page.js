// 메인 페이지 랜더링
exports.renderMain = (req, res, next) => {
    res.render('main', { title: 'ldhpop123 - Messenger' });
};

// 로그인 박스
exports.loginPage = (req, res, next) => {
    res.render('main', { title: '로그인 - Messenger' })
}

// 회원가입 박스
exports.joinPage = (req, res, next) => {
    res.render('main', { title: '회원가입 - Messenger' })
}