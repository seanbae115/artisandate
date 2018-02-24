const jwt = require('jwt-simple');
const User = require('../models/users');
const { sqlcredentials, secret } = require('../config/credentials');
const mysql = require('mysql');
const connection = mysql.createConnection(sqlcredentials);

function tokenForUser(user) {
    const ts = new Date().getTime();

    return jwt.encode({
        uid: user.ID,
        ts: ts
    }, secret);
}

exports.signup = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        const output = [];

        if (!email) {
            output.push('No email found');
        }

        if (!password) {
            output.push('No password found');
        }
        return res.status(422).send(output);
    }

    let user = User.userSearchSQL(email) 
    let newUser = User.createUser(email, password);
    connection.query(user, function (err, results, fields) {
        console.log('What the fuck:', results);
        if (err) return next(err);

        if (results[0]) {
            return res.status(422).send(['Email already in use'])
        } else {
            connection.query(newUser, function (err, results, fields) {
                console.log('Justin What The Fuck: ', results);
                if (err) throw err;
            });
        }
        res.send({
            email: email,
            token: tokenForUser(newUser)
        });
    });
}

exports.signin = (req, res, next) => {
    res.send({
        username: req.email,
        token: tokenForUser(req.user)
    });
}