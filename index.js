const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv').config();
app.use(cors());

if (process.env.ENV_NODE === 'development'){
}

//Routes + Controllers
app.get('/jamendosound', (req, res) => {
  // console.log(req.query.id);
  axios.get(`https://api.jamendo.com/v3.0/tracks?client_id=${process.env.JAMENDO_API_KEY}&id=${req.query.id}`)
    .then(response => res.send(response.data))
    .catch(response => console.log(response));
})

app.get('/jamendogetsound', (req, res) => {
  axios.get(`${req.query.url}?client_id=${process.env.JAMENDO_API_KEY}`)
    .then(response => res.send(response.data))
    .catch(response => console.log(response));
})

app.get('/youtubesound', (req, res) => {
  axios.get(`https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json`)
  .then(response => {res.send(response.data)})
  .catch(response => console.log(response));
})

app.get('/youtubesounds', (req, res) => {
  axios.get(decodeURIComponent(req.query.url), {
    responseType: "arraybuffer"
  })
  .then(response => {
    res.send(response.data)
  })
  .catch(error => console.log(error))
})

app.get('/freesound', (req, res) => {
  axios.get(`https://freesound.org/apiv2/sounds/${req.query.id}?token=${process.env.FREESOUND_TOKEN}`)
    .then(response => res.send(response.data) )
    .catch(response => console.log(response))
})

app.listen(5000, ()=> {
  console.log('listening on 5000')
})
