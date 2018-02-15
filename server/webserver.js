const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 9000;
const mysql = require('mysql');
const credentials = require('./sqlcredentials.js');
const con = mysql.createConnection(credentials);
const googleMaps = require('@google/maps').createClient({
    key: 'AIzaSyBAluNpWLyHEqQ8d28jmDMPsQLdtYVPV1A'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected to db");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'signup.html'))
})

app.post('/signup', (req, res) => {
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

app.get('/getdata', (req, res) => {
    console.log(req.body);
    const address = {
        address: '92618'
    }
    googleMaps.geocode(address, function(err, response){
        if (!err) {
            console.log(response.json.results[0].geometry.location.lat);
            console.log(response.json.results[0].geometry.location.lng);
        }
        res.json(response.json.results[0].geometry.location);
    });
})


app.listen(PORT, ()=>{
    console.log('the system is down on port 9000')
})
