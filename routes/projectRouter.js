const express = require("express");
const projectController = require("../controllers/projectController.js");
const project = require("../models/project.js");

const projectRouter = express.Router();

projectRouter.use("/", projectController.manageProjects);
projectRouter.use("/upload", projectController.postProject);
projectRouter.use("/delete", projectController.delProject);
// projectRouter.use("/create", projectController.addProject);
 
module.exports = projectRouter;