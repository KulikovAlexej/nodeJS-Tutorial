const { getUsers } = require('./db');
const { User } = require('./db');

// const admin = new User('Alex', 'Kulikov');
const users = getUsers();
console.log(users)


