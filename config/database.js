const env = require('./env');
env.get();
module.exports = {
    mongodb: {
        uri: 'mongodb+srv://'+process.env.MONGO_DB_USERNAME+':'+process.env.MONGO_DB_PASSWORD+'@'+process.env.MONGO_DB_HOST+'/'+process.env.MONGO_DB_DATABASE+'?'+process.env.MONGO_DB_PARAMETERS,
        url: 'mongodb+srv://mandreshope:3aEXr..NE:bVqHA@cluster0-ui1ks.mongodb.net/test?authSource=admin',
        local: 'mongodb://localhost:27017/adminsoamada'
    }
};
