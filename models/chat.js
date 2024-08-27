const Sequelize = require('sequelize');

class Chat extends Sequelize.Model {
    static initiate(sequelize) {
        Chat.init({
            content: {
                type: Sequelize.STRING(140),
                allowNull: false
            },
            img: {
                type: Sequelize.STRING(200),
                allowNull: true
            },
            roomId: {
                type: Sequelize.STRING(30),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            underscore: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        // db.User.belongToMany(db.User, {
        //     through: 'chatting',
        //     as: 'Chats',
        //     foreignKey: 'userId'
        // });

        // db.chat.belongToMany(db.Chat, {
        //     through: 'chatting',
        //     as: 'Users',
        //     foreignKey: 'chatId'
        // }) 
    }
}

module.exports = Chat;