const passport = require('passport'); 
const Authentication = require('../controllers/authentication');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
	app.post('/auth/signin', requireSignin, Authentication.signin);
	app.post('/auth/signup', Authentication.signup);
}