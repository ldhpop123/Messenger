// 로그인중?
exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        // passport - res객체에 isAuthenticated 매서드 추가
        next();
    } else {
        // res.status(403).send('로그인 필요');
        res.redirect('/login')
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태입니다.')
        res.redirect(`/?error=${message}`)
    }
}