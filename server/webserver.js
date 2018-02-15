const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 9000;
const mysql = require('mysql');
const credentials = require('./sqlcredentials.js');
const con = mysql.createConnection(credentials);

con.connect(function(err) {
    if (err) throw err;

    console.log("connected to db");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'index.html'))
})

app.get('/choose', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'choose-location.html'))
})

app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'result.html'))
})

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'eventPage.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'signup.html'))
})

app.post('/signup', (req, res) => {
    console.log(req);
    const {first, last, email, username, password} = req.body
    const status = 'active'
    let query = 'INSERT INTO ?? (??, ??, ??, ??, ??, ??)VALUES (?, ?, ?, ?, ?, ?)';
    let inserts = ['user','first', 'last', 'email', 'username', 'password', 'status', first, last, email, username, password, status];
    let sql = mysql.format(query, inserts);
    con.query(sql, (err, results, fields) => {
        if (err) throw err;

        const output = {
            success: true,
            data: results
        }
        res.json(output);
    })
})

app.listen(PORT, ()=>{
    console.log('the system is down on port 9000')
})
