// 创建路由实例
const express = require('express');
const router = express.Router();
const usersService = require('../service/usersService');
const bcrypt = require('bcrypt');

// 调用get方法
// $route GET api/routerDb/test
// @desc res json
// @access public
router.get("/test", (req, res) => {
    res.json({
        msg: "api 调用成功"
    })
})

// 调用post方法
// $route GET api/routerDb/register
// @desc res json
// @access public
router.post("/register", (req, res) => {
    usersService.selectUser(req.body.userId)
        .then((result) => {
            if (req.body.userId === result.dataValues.userId) {
                return res.status(400).json('该用户已存在!');
                // return res.json(result.dataValues);
            }
        }).catch((err) => {
            usersService.createUser(req.body);
            return res.json('注册成功!');
        });
})

// 调用post方法
// $route GET api/routerDb/register
// @desc res json
// @access public

router.post("/login", (req, response) => {
    usersService.selectUser(req.body.userId)
        .then((result) => {
            if (req.body.userId === result.dataValues.userId) {
                bcrypt.compare(req.body.password, result.dataValues.password,(err,res) =>{
                    if (res) {
                        return response.status(200).json('登录成功!');
                    }else{
                        return response.status(400).json('密码错误!');
                    }

                });
            }
        }).catch((err) => {
            console.log(err);
            return response.status(404).json('用户不存在!');
        });
})

module.exports = router;