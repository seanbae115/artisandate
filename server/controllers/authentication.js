const jwt = require('jwt-simple');
const User = require('../models/users');
const { sqlcredentials, secret } = require('../config/credentials');
const mysql = require('mysql');
const connection = mysql.createConnection(sqlcredentials);

function tokenForUser(user) {
    const ts = new Date().getTime();

    return jwt.encode({
        uid: user.id,
        ts: ts
    }, secret);
}

exports.signup = (req, res, next) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        const output = [];

        if (!email) {
            output.push('No email found');
        }

        if (!password) {
            output.push('No password found');
        }
        return res.status(422).send(output);
    }

    let sql = User.userSearchSQL(email) 
    
    connection.query(sql, function (err, results, fields) {
        if (err) { return done(err) }
        if (results[0]) {
            return done(null, false);
        } else {
            let sql = userCreateSQL(email, password);
            connection.query(sql, function (err, results, fields) {
                if (err) throw err;

                return done(null, results.insertId);
            });
        }
        res.send({
            username,
            token: tokenForUser(newUser)
        });
    });
}

exports.signin = (req, res, next) => {
    res.send({
        username: req.user.username,
        token: tokenForUser(req.user)
    });
}