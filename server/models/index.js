const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/chatta', {
    keepAlive: true,
    useMongoClient: true,
});