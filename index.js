const env = require('./config/env');
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const database = require('./config/database');

// .env file configuration
env.get();

// Express initialization
const app = express();



// CORS initialization
app.use(cors());

app.use(bodyParser.json())

// config database and database connexion
const mongoose = require('mongoose')
// app.use(function (req, res, next) {
//     mongoose.connect(database.mongodb.uri, { useNewUrlParser: true }).then(function () {
//         console.log('db connected')
//         mongoose.set('useFindAndModify', false)
//         next()
//     }).catch(err => console.log(err))
// })

// MongoDB connection

mongoose.connect(encodeURI(database.mongodb.uri), {
    useNewUrlParser: true
})

mongoose.Promise = global.Promise;

// On connection error
mongoose.connection.on('error', (error) => {
    console.log('Database error: ' + error);
});

// On successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
    mongoose.set('useFindAndModify', false)
});



// Route
const mainRouter = require('./router/main')
const memberRouter = require('./router/member')
const teamRouter = require('./router/team')
const projectRouter = require('./router/project')
const taskRouter = require('./router/task')
const teamDetailsRouter = require('./router/teamDetails')
const recruitmentRouter = require('./router/recruitment')
const customertRouter = require('./router/customer')
const contractRouter = require('./router/contract')
const notificationRouter = require('./router/notification')

app.use('/', mainRouter)
app.use('/api/member', memberRouter)
app.use('/api/team', teamRouter)
app.use('/api/project', projectRouter)
app.use('/api/task', taskRouter)
app.use('/api/teamDetails', teamDetailsRouter)
app.use('/api/recruitment', recruitmentRouter)
app.use('/api/customer', customertRouter)
app.use('/api/contract', contractRouter)
app.use('/api/notification', notificationRouter)

const server = app.listen(PORT, function () {
    const port = server.address().port;
    console.log('app running on port', port);
})

// npm install passport --save
// npm install passport-local --save
// npm install express-jwt --save
