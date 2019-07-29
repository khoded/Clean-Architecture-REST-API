const express = require('express');
const app = express();
const db = require('./config/db/db');
const bodyparser = require('body-parser');
const review = require('./pkg/reviews');

//connect to dbs
db.connectMongodb()

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(review.reviewService)


app.listen(8080, ()=>{
    console.log('server running.....')
})