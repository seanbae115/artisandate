const LocalStrategy = require('passport-local').Strategy;
const localConfig = require('./strategies/local');

const mysql = require('mysql');
const { sqlcredentials, crypt } = require('./credentials.js');
const connection = mysql.createConnection(sqlcredentials);

function userSearchSQL(email) {
	let sql = "SELECT * FROM ?? WHERE ?? = ?";
	let inserts = ['user', 'email', email];
	return mysql.format(sql, inserts);
}

function userCreateSQL(email, password) {
	let status = 'active'
	let sql = "INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?)";
	let inserts = ['user', 'id', 'email', 'password', 'status', null, email, crypt.createHash(password), status];
	return mysql.format(sql, inserts);
}

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (user, done) {
		let sql = "SELECT * FROM ?? WHERE ?? = ?";
		let inserts = ['user', 'id', user[0].ID];
		sql = mysql.format(sql, inserts);
		connection.query(sql, 
			function (err, results, fields) {
				done(err, results[0].ID)
			}
		);	
	});

	passport.use('local-signup', new LocalStrategy(localConfig,
		function (req, email, password, done) {
			process.nextTick(function () {
				let sql = userSearchSQL(email);

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
		}));

	passport.use('local-signin', new LocalStrategy(localConfig,
		function (req, email, password, done) { // callback with email and password from our form
			let sql = userSearchSQL(email);

			connection.query(sql, function (err, results, fields) {

				if (err) { return done(err); }

				if (!results[0]) { return done(null, false); }

				if (!crypt.checkPassword(password, results[0].password)) { return done(null, false); }

				return done(null, results);
			});
		}));
	
};