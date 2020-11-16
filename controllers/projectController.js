const Project = require('../models/project')

// Страница добавления проекта
exports.addProject = (req, res) => {
    res.render('newproject.hbs');
};

// Обработчик POST запроса добавления проекта
exports.postProject = (req, res) => {
    if (!req.body) return res.sendStatus(404);
    
    let name = req.body.name;
    let description = req.body.description;
    let filedata = req.file;

    console.log(name);
    console.log(description);
    console.log(filedata);

    const project = new Project({
        name: name,
        description: description,
        image: "https://via.placeholder.com/1920x1080"
    });

    project.save((err) => {
        if (err) return console.log(err);
        //res.redirect('/projects');
    });


    if (!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
}

// Получить все проекты, используем на index
exports.getProjects = (req, res) => {
    Project.find({}, (err, allProjects) => {

        if (err) {
            console.log(err);
            return res.sendStatus(404);
        }

        res.render('index.hbs', {
            projects: allProjects
        });
    });
};

// exports.postUser = (req, res) => {
//     if (!req.body) return res.sendStatus(404);
//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const user = new User({
//         name: userName,
//         age: userAge
//     });

//     user.save((err) => {
//         if (err) return console.log(err);
//         res.redirect('/users');
//     });
// };



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