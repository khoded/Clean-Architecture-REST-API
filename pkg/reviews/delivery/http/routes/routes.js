const handlers = require('../handlers/handlers');
const express = require('express');
const api = express.Router();



const newDelivery =  (usecase)  =>{
    const handler = new handlers(usecase);

    api.post('/', (req,res)=>{
        handler.createReview(req,res)
    })
    api.get('/',(req,res)=>{
        res.json("review service is live")
    })

}

module.exports = {
    newDelivery,
    api
}