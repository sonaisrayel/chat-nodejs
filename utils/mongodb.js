const mongoose = require('mongoose');
const config = require('config');


function init() {

    const connection = config.get('db.connection_string');
    const options = config.get('db.connection_options');

    mongoose.connect(connection, options);

    mongoose.connection.on('error', (err) => {
        console.log(err);

    });

    mongoose.connection.on('open', () => {
        console.log('Connection is open');
    });

}


module.exports = {
    init
}