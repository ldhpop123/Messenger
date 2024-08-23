const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            email: {

            },
            nick: { // 닉네임


            }
        })
    }
}