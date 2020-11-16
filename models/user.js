const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model('User', userScheme);

// без бд
// const users = [];

// module.exports = class User {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     save() {
//         users.push(this)
//     }

//     static getAll() {
//         return users;
//     }
// }