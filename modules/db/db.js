const users = require('./users.json');
const User = require('./user');

function getUsers() {
    return users;
}

module.exports = {
    getUsers
};