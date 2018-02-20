const express = require('express');
const path = require('path');
const cors = require("cors");

const PORT = process.env.PORT || 8000;

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

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'client')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'apitest.html'))
})

app.use(express.urlencoded());
app.use(express.json());
//DATABASE INTERACTIONS

//new user
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

//save date
app.post('/addCompletedDate', (req, res) => {
    let request = req.body;
    console.log(JSON.parse(request));
    let events = []
    events.push(...request.events, ...request.food, ...request.drinks);
    const {name, id, location, url, image_url, coordinates} = events[0];
    let query = 'INSERT INTO locations (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)';
    let table = 'locations';
    let inserts = ['name', 'city', 'address', 'yelpID', 'primaryPhoto', 'lat', 'lng', name, location.city, location.address1, id, image_url, coordinates.latitude, coordinates.longitude];
    let sql = mysql.format(query, inserts);
    con.query(sql, (err, results, fields) => {
        if (err) return done(err);
        const output = {
            success: true,
            data: results
        }
        res.json(output);
    });

    // const { name, id, location, url, image_url, coordinates } = events[1];
    // let query = 'INSERT INTO locations (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)';
    // let table = 'locations';
    // let inserts = ['name', 'city', 'address', 'yelpID', 'primaryPhoto', 'lat', 'lng', name, location.city, location.address1, id, image_url, coordinates.latitude, coordinates.longitude];
    // let sql = mysql.format(query, inserts);
    // con.query(sql, (err, results, fields) => {
    //     if (err) throw err;
    //     const output = {
    //         success: true,
    //         data: results
    //     }
    //     res.json(output);
    // });

    // const { name, id, location, url, image_url, coordinates } = events[2];
    // let query = 'INSERT INTO locations (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)';
    // let table = 'locations';
    // let inserts = ['name', 'city', 'address', 'yelpID', 'primaryPhoto', 'lat', 'lng', name, location.city, location.address1, id, image_url, coordinates.latitude, coordinates.longitude];
    // let sql = mysql.format(query, inserts);
    // con.query(sql, (err, results, fields) => {
    //     if (err) throw err;
    //     const output = {
    //         success: true,
    //         data: results
    //     }
    //     res.json(output);
    // });

})
const output = {
    events: null,
    food: null,
    drinks: null
}

//results endpoint
app.post('/getEverything', (req, res)=>{
    var events = client.search({
            term: 'hike, beach, park',
            location: 90742,
            radius: 8000,
            limit: 3
        })
        .then(
            response => response.jsonBody.businesses
        );
        
    var food = client.search({
            term: 'restaurant',
            location: 90742,
            radius: 8000,
            limit: 3
        })
        .then(
            response => response.jsonBody.businesses
        );

    var drinks = client.search({
            term: 'coffee',
            location: 90742,
            radius: 8000,
            limit: 3
        })
        .then(
            response => response.jsonBody.businesses
        )

    events.then((v)=>{
        output.events = v;
    })
    food.then((v) => {
        output.food = v;
    })
    drinks.then((v) => {
        output.drinks = v;
    })
    var p = Promise.all([events, food, drinks])
    
    p.then(function (v) {
        console.log(output)
        res.send(output);
    });
})

app.get('/getdata', (req, res) => {
    console.log(req.body);
    const address = {
        address: '92618'
    };
    googleMaps.geocode(address, function(err, response){
        if (!err) {
            let lat = response.json.results[0].geometry.location.lat;
            let lng = response.json.results[0].geometry.location.lng;
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
            keyword: 'restaurant',
            rankby: 'distance'
        },
        responseType: 'json'
    }) 
        .then(function(response){
            var results = response.data.results;
            console.log(response.data.results);
            res.json(results[3].photos[0].photo_reference);
        })
        .catch(err => {
            console.log(err);
        })
})

app.get('/getEvents', (req, res) => {
    axios({
        url: 'https://api.yelp.com/v3/events',
        headers: {'Authorization': 'Bearer xkA9Hp5U6wElMNSf3MGcF_L6R0Io18O69Xsth-G-OsV50MIfoVyiWfQmmQgFHpmFvgFatiEW8sppCiAVWrfRgpy1-pNH905xO-Okl1TV6nIqp_RXCSDmvJFOEqKLWnYx'},
        params:{
            location: 90742,
            radius: 8000,
            limit: 10,
            sort_on: 'popularity',
            start_date: 1519104023
        },
        responseType: 'json'
    })
    .then(function(response){
        var results = response.data.events
        var output = [];
        for(var i = 0; i < results.length; i++){
            var img = '<img src='+results[i].image_url+' height="300" width="300">'
            output.push(img);
        }

        console.log(response.data.events);
        res.send(output.join('\n'));
    })
    .catch(function(err){
        console.log(err);
    })
})


app.listen(PORT, ()=>{
    console.log('the system is down on port', PORT)
})






