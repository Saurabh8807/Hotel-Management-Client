const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('./db/config')
const User = require('./db/reservations')
const CardDetails = require('./db/cardDetails')
const app = express()
const PORT = process.env.PORT ||5000
app.use(express.json())
app.post('/Reservation',async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
})
app.post('/Payment',async(req,res)=>{
    let cardDetails = new CardDetails(req.body)
    let result = await cardDetails.save()
    res.send(result)
})
app.use(cors())
app.listen(PORT)

