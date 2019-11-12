const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wts15085250704',
    port: '3306',
    database: 'test'
}) 

const conn =  connection;
module.exports = conn;