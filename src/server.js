const express = require('express')
const cors = require('cors')

const db = require ('./dataBase');
const routes = require('./routes');


const app = express();

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
]

//cors habilita
app.use(cors({
    origin:function(origin, callback){
        let allowed = true

        //mobile app
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    },
}))

//habilita server para receber dados JSON
app.use(express.json())

//rota
app.use('/api', routes)


//executando servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is on port ${port}`));