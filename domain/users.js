const Sequelize = require("sequelize");
const sequelize = require("../db/dataorm").sequelize;

const cloum = {
    userId: {
        field: 'user_id',
        primaryKey: true,
        type: Sequelize.STRING(30),
        allowNull: false
    },
    password:{
        field:'password',
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        field: 'user_name',
        type: Sequelize.STRING,
        allowNull: false
    },
    userIcon: {
        field: 'user_icon',
        type: Sequelize.BLOB,
        allowNull: true
    },
    title: {
        field: 'title',
        type: Sequelize.STRING,
        allowNull: true
    },
    birth: {
        field: 'birth',
        type: Sequelize.DATE,
        allowNull: true
    },
    mail: {
        field: 'mail',
        type: Sequelize.STRING,
        allowNull: true
    },
    mobile: {
        field: 'mobile',
        type: Sequelize.BIGINT,
        allowNull: true
    },
    updateTime: {
        field: 'update_time',
        type: Sequelize.DATE,
        allowNull: true
    }
}

const users = sequelize.define('user', cloum,{
    timestamps: false
});

module.exports = users;

