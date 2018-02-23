const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');

const { secret } = require('./config/credentials');

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./config/passport.js');

require('./routes/auth.js')(app);

require('./routes/index.js')(app, path);

app.listen(PORT, ()=>{
    console.log('the system is down on port', PORT)
});
