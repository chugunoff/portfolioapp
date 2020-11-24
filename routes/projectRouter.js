const express = require("express");
const projectController = require("../controllers/projectController.js");

const projectRouter = express.Router();

projectRouter.use("/", projectController.manageProjects);
projectRouter.use("/upload", projectController.postProject);
// projectRouter.use("/create", projectController.addProject);
 
module.exports = projectRouter;