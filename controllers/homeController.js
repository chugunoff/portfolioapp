const os = require('os');
const https = require('https');
const Project = require('../models/project');

exports.index = (req, res) => {
    res.render('index.hbs');
    // res.send(`Главная`);
};

exports.about = (req, res) => {
    res.send(`О сайте`);
};

exports.serverip = (req, res) => {
    https.get('https://myip.ru/index_small.php', (getres) => {
        getres.setEncoding('utf8');
        let rawData = '';
        getres.on('data', (chunk) => { rawData += chunk; });
        getres.on('end', () => {
            try {
                res.send(`${rawData}`);
            } catch (e) {
                res.send(`${e.message}`);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}