const express = require('express');
const homeController = require('../controllers/homeController.js');
const projectController = require('../controllers/projectController')

const homeRouter = express.Router();

homeRouter.get('/about', homeController.about);
homeRouter.get('/serverip', homeController.serverip);
homeRouter.get('/', projectController.getProjects);

module.exports = homeRouter;