const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user')

module.exports = () => {
    // 사용자 정보를 세션에 저장 -> 사용자 인증 시 호출
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    // 세션에 저장된 사용자 id를 통해 사용자 정보를 복원 -> 매 요청 시 호출
    passport.deserializeUser((id, done) => {
        User.findOne({ where: {id} })
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local();
}

