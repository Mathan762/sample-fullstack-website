const mysql = require('mysql2');

const conn = mysql.createConnection ( {
    host:'localhost',
    user:'root',
    password:'root',
    database:'student',
    port:3306
});

module.exports = conn;