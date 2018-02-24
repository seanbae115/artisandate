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
	let user = Users.userSearchSQL(email);
	connection.query(user, function (err, results, fields){
		if (err) return done(err)
		if (!results[0]) return done(null, false);
		if (!crypt.checkPassword(password, results[0].password)) { return done(null, false); }
		return done(null, results);
		//  user.comparePasswords(password, (err, isMatch) => {
		// 	if(err) return done(err);
		// 	if(!isMatch) return done(null, false);
		// 	done(null, user)
	});
});

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: secret
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => { // callback with email and password from our form
	let user = Users.userSearchSQL(payload.email);
	connection.query(user, function (err, results, fields) {
		if (err) { return done(err); }
		if (!results[0]) { return done(null, false); }
		done(null, results);
	});
});

passport.use(jwtLogin);
passport.use(localLogin);