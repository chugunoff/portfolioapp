const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const expressHbs = require('express-handlebars');
const path = require('path');
const multer = require('multer');


const app = express();

// определяем роутеры
const userRouter = require('./routes/userRouter.js');
const homeRouter = require('./routes/homeRouter.js');
const projectRouter = require('./routes/projectRouter.js');

// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Доступ к файлам public по http://localhost:3000/[css|js|...]
app.use(express.static(path.join(__dirname, '/public')));
// Доступ к файлам uploads по http://localhost:3000/<filename>
app.use(express.static(path.join(__dirname, '/uploads')));

// multer
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

app.use(multer({ storage: storageConfig }).single("filedata"));

// роутеры
app.use('/users', userRouter);
app.use('/projects', projectRouter);
app.use('/', homeRouter);

// 404
app.use((req, res, next) => {
    res.status(404).send(`Not found`);
});

port = 3000

mongoose.connect('mongodb://localhost:27017/projectdb',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) return console.log(err);
        app.listen(port, () => {
            console.log(`Сервер работает на ${port} порте.`)
        });
    }
);