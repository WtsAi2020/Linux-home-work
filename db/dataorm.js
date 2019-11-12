const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'test', // 数据库名
    'root',   // 用户名
    'wts15085250704',   // 用户密码
    {
        'dialect': 'mysql',  // 数据库使用mysql
        'host': 'localhost', // 数据库服务器ip
        'port': 3306,        // 数据库服务器端口
        'define': {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            'underscored': true
        },
        'poll':{
            'maxIdleTime':10000 //10000ms的空闲时间后，释放连接
        }
    }
);


module.exports = {
    sequelize
};
