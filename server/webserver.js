const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'index.html'))
})

app.get('/choose', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'choose-location.html'))
})

app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'result.html'))
})

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html_skeleton', 'eventPage.html'))
})

app.listen(PORT, ()=>{
    console.log('the system is down on port 9000')
})