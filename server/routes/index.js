const { googleKey, yelpKey} = require('../config/credentials.js');

const axios = require('axios');
const yelp = require('yelp-fusion');
const client = yelp.client(yelpKey);
const googleMaps = require('@google/maps').createClient({
    key: googleKey
});

const mysql = require('mysql');
const { sqlcredentials, crypt } = require('../config/credentials.js');
const connection = mysql.createConnection(sqlcredentials);

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected to db");
});

module.exports = function(app,  path){
    app.post('/addCompletedDate', (req, res) => {
        let request = testObject;
        console.log(request);
        var events = function () {
            const { name, id, location, url, image_url, coordinates } = request.events;
            let query = 'INSERT INTO locations (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)';
            let table = 'locations';
            let inserts = ['name', 'city', 'address', 'yelpID', 'primaryPhoto', 'lat', 'lng', name, location.city, location.address1, id, image_url, coordinates.latitude, coordinates.longitude];
            let sql = mysql.format(query, inserts);
            connection.query(sql, (err, results, fields) => {
                if (err) return next(err);
                const output = {
                    success: true
                }
                console.log('events added')
            });
        }();

        var food = function () {
            const { name, id, location, url, image_url, coordinates } = request.food;
            let query = 'INSERT INTO locations (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)';
            let table = 'locations';
            let inserts = ['name', 'city', 'address', 'yelpID', 'primaryPhoto', 'lat', 'lng', name, location.city, location.address1, id, image_url, coordinates.latitude, coordinates.longitude];
            let sql = mysql.format(query, inserts);
            connection.query(sql, (err, results, fields) => {
                if (err) next(err);
                const output = {
                    success: true
                };
                console.log('food added')
            });
        }();

        var drinks = function () {
            const { name, id, location, url, image_url, coordinates } = request.drinks;
            let query = 'INSERT INTO locations (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)';
            let table = 'locations';
            let inserts = ['name', 'city', 'address', 'yelpID', 'primaryPhoto', 'lat', 'lng', name, location.city, location.address1, id, image_url, coordinates.latitude, coordinates.longitude];
            let sql = mysql.format(query, inserts);
            connection.query(sql, (err, results, fields) => {
                if (err) next(err);
                const output = {
                    success: true
                };
                console.log('drinks added')
            });
        }()
    });

    const output = {
        events: null,
        food: null,
        drinks: null
    };

    //results endpoint
    app.post('/getEverything', (req, res) => {
        var temp = {};
        var zip = req.body.zip;
        var ts = Math.floor(new Date().getTime() / 1000);

        var places = client.search({
            term: 'hike, beach, park',
            location: zip || 90742,
            radius: 8000,
            limit: 3
        })
            .then(
                response => response.jsonBody.businesses
            );
        var events = axios({
            url: 'https://api.yelp.com/v3/events',
            headers: { 'Authorization': 'Bearer xkA9Hp5U6wElMNSf3MGcF_L6R0Io18O69Xsth-G-OsV50MIfoVyiWfQmmQgFHpmFvgFatiEW8sppCiAVWrfRgpy1-pNH905xO-Okl1TV6nIqp_RXCSDmvJFOEqKLWnYx' },
            params: {
                location: zip || 90742,
                radius: 8000,
                limit: 3,
                sort_on: 'popularity',
                start_date: ts
            },
            responseType: 'json'
        })
            .then(
                response => response.data.events
            );

        var food = client.search({
            term: 'restaurant',
            location: zip || 90742,
            radius: 8000,
            limit: 3
        })
            .then(
                response => response.jsonBody.businesses
            );

        var drinks = client.search({
            term: 'coffee',
            location: zip || 90742,
            radius: 8000,
            limit: 3
        })
            .then(
                response => response.jsonBody.businesses
            );

        places.then((v) => {
            temp.places = v;
        });

        events.then((v) => {
            temp.events = v;
        });

        food.then((v) => {
            output.food = v;
        });

        drinks.then((v) => {
            output.drinks = v;
        });
        var p = Promise.all([places, events, food, drinks]);

        p.then(function (v) {
            var result = temp.places.concat(temp.events);
            output.events = result;
            res.send(output);
        });
    });
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
                res.json(results[3].photos[0].photo_reference);
            })
            .catch(err => {
                console.log(err);
            })
    });

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
            var results = response.data.events;
            var output = [];
            for(var i = 0; i < results.length; i++){
                var img = '<img src='+results[i].image_url+' height="300" width="300">';
                output.push(img);
            }
            res.send(output.join('\n'));
        })
        .catch(function(err){
            console.log(err);
        })
    });

    app.get('/getPhotos', (req, res) => {
        axios({
            url: 'https://api.yelp.com/v3/businesses/four-sons-brewing-huntington-beach-5',
            headers: {'Authorization': 'Bearer xkA9Hp5U6wElMNSf3MGcF_L6R0Io18O69Xsth-G-OsV50MIfoVyiWfQmmQgFHpmFvgFatiEW8sppCiAVWrfRgpy1-pNH905xO-Okl1TV6nIqp_RXCSDmvJFOEqKLWnYx'},
            responseType: 'json'
        })
        .then(function(response){
                console.log('=========   Photos:  =========',response.data.photos);
                res.json(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
    })

// app.get('/getdata', (req, res) => {
//     console.log(req.body);
//     const address = {
//         address: '92618'
//     };
//     googleMaps.geocode(address, function(err, response){
//         if (!err) {
//             let lat = response.json.results[0].geometry.location.lat;
//             let lng = response.json.results[0].geometry.location.lng;
//         }
//         res.json(response.json.results[0].geometry.location);
//     });

// })

//new user
// app.post('/signup', (req, res) => {
//     const {first, last, email, username, password} = req.body
//     const status = 'active'
//     bcrypt.hash(password, 10, function(err, hash) {
//         let query = 'INSERT INTO ?? (??, ??, ??, ??, ??, ??)VALUES (?, ?, ?, ?, ?, ?)';
//         let inserts = ['user','first', 'last', 'email', 'username', 'password', 'status', first, last, email, username, hash, status];
//         let sql = mysql.format(query, inserts);
//         con.query(sql, (err, results, fields) => {
//             if (err) throw err;

//             const output = {
//                 success: true,
//                 data: results
//             }
//             res.json(output);
//         })
//     })

// })
};