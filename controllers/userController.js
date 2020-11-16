const User = require('../models/user')

exports.addUser = (req, res) => {
    res.render('create.hbs');
};

exports.getUsers = (req, res) => {
    User.find({}, (err, allUsers) => {

        if (err) {
            console.log(err);
            return res.sendStatus(404);
        }

        res.render('users.hbs', {
            users: allUsers
        });
    });
};

exports.postUser = (req, res) => {
    if (!req.body) return res.sendStatus(404);
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User({
        name: userName,
        age: userAge
    });

    user.save((err) => {
        if (err) return console.log(err);
        res.redirect('/users');
    });
};



// без бд
// const User = require('../models/user.js')

// exports.addUser = (req, res) => {
//     res.render('create.hbs');
// };

// exports.getUsers = (req, res) => {
//     res.render('users.hbs', {
//         users: User.getAll()
//     });
// };

// exports.postUsers = (req, res) => {
//     const username = req.body.name;
//     const userage = req.body.age;
//     const user = new User(username, userage);
//     user.save();
//     res.redirect('/users');
// };