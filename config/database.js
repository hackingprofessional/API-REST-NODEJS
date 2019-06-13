//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://172.17.0.2:27017/BinaryChaos';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;