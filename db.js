var hidenConstants = require('./hidenConstants')
const knex = require('knex')({
    client: 'postgres',
    // Uncomment to enable SQL query logging in console.
    // debug   : true,

    //*** Local
    connection: {
        host: '127.0.0.1',
        user: hidenConstants.db.user,
        password: hidenConstants.db.password,
        database: 'speak-it',
        charset: 'utf8',
    }
});

var DB = require('bookshelf')(knex);

module.exports.DB = DB;