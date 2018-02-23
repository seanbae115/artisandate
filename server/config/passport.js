const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { sqlcredentials, crypt, secret } = require('./credentials');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Users = require('../models/users');
const mysql = require('mysql');
const connection = mysql.createConnection(sqlcredentials);
const bcrypt = require('bcrypt-nodejs');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
	let sql = Users.userSearchSQL(email);
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
	});
});

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: secret
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => { // callback with email and password from our form
	let sql = Users.userSearchSQL(payload.email);
	connection.query(sql, function (err, results, fields) {
		if (err) { return done(err); }
		if (!results[0]) { return done(null, false); }
		if (!crypt.checkPassword(payload.password, results[0].password)) { return done(null, false); }
		return done(null, results);
	});
});

passport.use(jwtLogin);
passport.use(localLogin);