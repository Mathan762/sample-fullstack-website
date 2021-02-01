const express = require('express');
const conn = require('../model/database');
const app = express();
const router = express.Router();
const connection = require('../model/database');

connection.connect((err) => {
    if(err) throw err;

    console.log('Connection successful');
})

router.get('/', (req, res) => {
    res.send('Welcome to Server. Please use /home to access the Website. Thank You!!!');
})

router.get('/home', (req, res) => {
    res.render('index');
})

router.post('/marksheet', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    connection.query('SELECT * FROM student_reg WHERE email LIKE? AND password LIKE ?', [username, password], (err, result) => {
        if(result) {
            connection.query('SELECT student_reg.reg_no, student_reg.name, student_marksheet.sub1, student_marksheet.sub2,student_marksheet.sub3, student_marksheet.sub4, student_marksheet.sub5 FROM student_reg JOIN student_marksheet USING(reg_no)', (err, result1) => {
                res.render('marksheet', {data:result1});
            })
        }
    })
})

router.post('/registervalidate', (req, res) => {
    let regno = req.body.register;
    let name = req.body.name1;
    let email = req.body.email;
    let password = req.body.password;

    connection.query('INSERT INTO student_reg VALUES(?,?,?,?)', [name, regno, email, password], (err, result) => {
        if(result) {
            res.render('index');
        }
    })
})

module.exports = router;