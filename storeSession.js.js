const connection = require('./server/dbconfig');
const store = new MySQLStore(db.connectionOptions);
module.exports = store;