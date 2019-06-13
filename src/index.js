const express = require('express');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb+srv://root:qixv7uni@cluster0-6ih37.mongodb.net/test?retryWrites=true&w=majority',{
    userNewUrlParser: true,
}, () => console.log('MongoDB Conectado'));


app.use(require('./routes'));

app.listen(3333);

