const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000
const cors =  require('cors')

app.use(bodyParser.json())

// config database and database connexion
const mongoose = require('mongoose')
app.use(function(req, res, next) {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then( function() {
        console.log('db connected')
        mongoose.set('useFindAndModify', false)
        next()
    }).catch( err => console.log(err))
})


// Route
const mainRouter =  require('./router/main')
const memberRouter =  require('./router/member')
const teamRouter =  require('./router/team')
const projectRouter = require('./router/project')
const taskRouter = require('./router/task')
const teamDetailsRouter = require('./router/teamDetails')
const recruitmentRouter = require('./router/recruitment')
const customertRouter = require('./router/customer')
const contractRouter = require('./router/contract')

app.use('/', mainRouter)
app.use('/api/member', memberRouter)
app.use('/api/team', teamRouter)
app.use('/api/project', projectRouter)
app.use('/api/task', taskRouter)
app.use('/api/teamDetails', teamDetailsRouter)
app.use('/api/recruitment', recruitmentRouter)
app.use('/api/customer', customertRouter)
app.use('/api/contract', contractRouter)

app.listen(PORT, function() {
    console.log('Server connected.')
})

// npm install passport --save
// npm install passport-local --save
// npm install express-jwt --save