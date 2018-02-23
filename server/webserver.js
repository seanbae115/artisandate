const express = require('express');

const cors = require('cors');
const path = require('path');

const passport = require('passport');
const session = require('express-session');

const { secret } = require('./config/credentials.js');

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(session({secret}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport.js')(passport);

require('./routes/auth.js')(app, passport);

require('./routes/index.js')(app, path);

app.listen(PORT, ()=>{
    console.log('the system is down on port', PORT)
});
