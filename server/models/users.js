const mysql = require('mysql'); 
const bcrypt = require('bcrypt-nodejs');
const { crypt } = require('../config/credentials');

exports.createUser = (email, password) => {
    let status = 'active';
    let sql = "INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?)";
    let inserts = ['user', 'id', 'email', 'password', 'status', null, email, crypt.createHash(password), status];
    return mysql.format(sql, inserts);
}


exports.userSearchSQL = (email) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?";
    let inserts = ['user', 'email', email];
    return mysql.format(sql, inserts);
}