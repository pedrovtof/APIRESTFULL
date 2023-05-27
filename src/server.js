const express = require('express')
//const path = require ('path');

const db = require ('./dataBase');
const routes = require('./routes');


const app = express();

db.connect()


//habilita server para receber dados via post form
app.use(express.urlencoded({extended: true}));


//rota
app.use('/api', routes)


//executando servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is on port ${port}`));