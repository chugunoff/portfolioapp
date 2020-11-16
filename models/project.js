const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// установка схемы
const projectSchema = new Schema({
    name: String,
    description: String,
    image: String
})

module.exports = mongoose.model('Project', projectSchema);

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