const express = require('express');
const cors = require('cors');
const socket= require('socket.io');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended:false}))

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));
app.use('/api/lostPet', require('./routes/lostPet'));

module.exports = app;