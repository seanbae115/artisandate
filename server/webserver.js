const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 9000;

const mysql = require('mysql');

const yelp = require('yelp-fusion');

const client = yelp.client('7-Nigq6mj6nZN9yVrEGNS3IqPJhwAX7a0DoedYIDkJX19U22nM5FH4-pf69tCOASbCSKyj8oMkH5XWSbvYnFeLneeagBXTYOC697leKz21iN6Ogpkm059vnbwsx0WnYx');

const axios = require('axios')
const credentials = require('./sqlcredentials.js');

const con = mysql.createConnection(credentials);

const googleMaps = require('@google/maps').createClient({
    key: 'AIzaSyBAluNpWLyHEqQ8d28jmDMPsQLdtYVPV1A'
});


con.connect(function(err) {
    if (err) throw err;
    console.log("connected to db");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'apitest.html'))
})


//Database interactions
app.post('/signup', (req, res) => {
    const {first, last, email, username, password} = req.body
    const status = 'active'
    let query = 'INSERT INTO ?? (??, ??, ??, ??, ??, ??)VALUES (?, ?, ?, ?, ?, ?)';
    let inserts = ['user','first', 'last', 'email', 'username', 'password', 'status', first, last, email, username, password, status];
    let sql = mysql.format(query, inserts);
    con.query(sql, (err, results, fields) => {
        if (err) throw err;

        const output = {
            success: true,
            data: results
        }
        res.json(output);
    })
})

const output = {
    events: null,
    dinner: null,
    bars: null
}


//promises testing

app.post('/promiseTest', (req, res)=>{
    var promise1 = client.search({
            term: 'hike, beach, park',
            location: 90742,
            radius: 8000,
            limit: 3
        })
        .then(
            response => response.jsonBody.businesses
        );
    var promise2 = client.search({
            term: 'restaurant',
            location: 90742,
            radius: 8000,
            limit: 3
        })
        .then(
            response => response.jsonBody.businesses
        );
    var promise3 = client.search({
            term: 'coffee',
            location: 90742,
            radius: 8000,
            limit: 3
        })
        .then(
            response => output.bars = response.jsonBody.businesses
        )

    Promise.all([promise1,promise2,promise3]).then(function (values) {
        console.log(values);
        res.end();
    });
})

//content enpoint
app.post('/getEverything', (req, res) => {
    console.log('request', req.body)
    const zip = req.body.zipcode || 90742;
    const drink = req.body.drinks || 'bars, coffee, tea, beer';
    const food = req.body.cuisine || 'restaurants';
    client.search({
        term: 'hike, beach, park',
        location: zip,
        radius: 8000,
        limit: 3
    }).then(response => {
        output.events = response.jsonBody.businesses;
        if(output.dinner && output.bars){
            res.json(output)
        }
    }).catch(e => {
        console.log('error',e);
    });
    //dinner
    client.search({
        term: food,
        location: zip,
        radius: 8000,
        limit: 3
    }).then(response => {
        output.dinner = response.jsonBody.businesses;
        if (output.events && output.bars) {
            res.json(output)
        }
    }).catch(e => {
        console.log('error', e);
    })
    //bars
    client.search({
        term: drink,
        location: zip,
        radius: 8000,
        limit: 3
    }).then(response => {
        output.bars = response.jsonBody.businesses;
        if (output.dinner && output.events) {
            res.json(output)
        }
    }).catch(e => {
        console.log('error', e);
    })
});

app.get('/getdata', (req, res) => {
    console.log(req.body);
    const address = {
        address: '92618'
    }
    googleMaps.geocode(address, function(err, response){
        if (!err) {
            let lat = response.json.results[0].geometry.location.lat
            let lng = response.json.results[0].geometry.location.lng
        }
        res.json(response.json.results[0].geometry.location);
    });
    
})
//google places call for food
app.get('/getDinner', (req, res)=>{
    axios({
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        params: {
            key: 'AIzaSyBQzvigXgukz_X2Ii05aUywXroY4776EFE',
            location: '33.665242, -117.7490656',
            radius: 5000,
            type: 'restaurant'
        },
        responseType: 'json'
    }) 
        .then(function(response){
            var results = response.data.results;
            console.log(response.data.results);
            res.json(results[0].photos[0].photo_reference);
        })
        .catch(err => {
            console.log(err);
        })
})

app.listen(PORT, ()=>{
    console.log('the system is down on port 9000')
})




