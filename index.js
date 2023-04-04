const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());

//Routes + Controllers
app.get('/jamendosound', (req, res) => {
  // console.log(req.query.id);
  axios.get(`https://api.jamendo.com/v3.0/tracks?client_id=${process.env.JAMENDO_API_KEY}&id=${req.query.id}`)
    .then(response => res.send(response.data));
    // .then(response => console.log(response.data));
    // response.data.results[0].audio
})

app.get('/jamendogetsound', (req, res) => {
  console.log(req.query.url);
  axios.get(`${req.query.url}?client_id=${process.env.JAMENDO_API_KEY}`)
    .then(response => res.send(response.data))
    .catch(response => console.log(response))
    // .then(response => console.log(response.data))
})

app.get('/youtubesound', (req, res) => {
  axios.get(`https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json`)
  .then(response => res.send(response.data) )
})

app.get('/freesound', (req, res) => {
  axios.get(`https://freesound.org/apiv2/sounds/${req.query.id}?token=${process.env.FREESOUND_TOKEN}`)
  .then(response => res.send(response.data) )
})

app.listen(5000, ()=> {
  console.log('listening on 5000')
})