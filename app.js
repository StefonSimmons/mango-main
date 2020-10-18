// all my installs are routed from here
const express = require('express') // express app
const bodyParser = require('body-parser'); // for POST reqs
const logger = require('morgan'); // for viewing CRUD in the terminal
const cors = require('cors') // for frontend <--> backend commuication
const mongoose = require('mongoose')

const routes = require('./routes'); //-----
const app = express() 

app.use(bodyParser.json()) // expecting json data
app.use(logger('dev')) // good 
app.use(cors())  // good

app.use('/api', routes); //------


module.exports = { app, mongoose } // exported to server.js to listen for the connection to the host