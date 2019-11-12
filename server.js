const express = require("express");
const conn = require("./db/connect");
const usersController = require("./controller/usersController");
const bodyParser = require("body-parser");

const app = express();

conn.connect();


// 数据库连接并发送sql语句
// conn.query("show tables", (err, result) => {
//     if (err) {
//         console.log('[SELECT ERROR] - ', err.message);
//         return;
//     }
//     console.log("mySql is connected");
// });

// get方法注册接口 localhost8082/
// app.get("/", (req, res) => {
//     res.send("hello,world")
// })

// 这里真心想吐槽一下，body-parser一定要放在接口初始化的前面，不然它没用
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/usersController/', usersController);


// 创建服务端口 process.env.PORT || 5000;
const port = process.env.PORT || 5000;

//监听
app.listen(port, () => {
    console.log(`Server is start on port ${port}`);
})

// 创建外部引用实例
// module.exports = app;