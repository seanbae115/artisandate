const mysql = require('mysql');
const credentials = require('./sqlcredentials.js');
const con = mysql.createConnection(credentials);
const bcrypt = require('bcrypt')