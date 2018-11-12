const db = require('./db');
const User = require('./user');

module.exports = {
    db,
    User,
    getUsers: db.getUsers
}