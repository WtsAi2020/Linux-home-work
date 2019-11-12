const users = require('../domain/users');
const bcrypt = require('bcrypt');

const usersService = {
    selectUser(id) {
        return users.findOne({
            where: {
                user_id: id
            }
        })
    },
    createUser(data) {
        return bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(data.password, salt, (err, hash) =>{
                if (err) throw err;
                data.password = hash;
                users.create(data);
            })
        })
    }
}

module.exports = usersService;

// 这里用到了ES6里的异步操作
// 定义了查询函数，里面是一个查询的异步
// 那么在某种程度上，我return出的也是一个异步，所以只要判断一下就可以得到数据了。
// 例:

// selectUser(2017250084).then((result) => {

// }).catch((err) => {

// });

