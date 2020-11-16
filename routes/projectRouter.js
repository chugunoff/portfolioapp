const express = require("express");
const projectController = require("../controllers/projectController.js");

const projectRouter = express.Router();
 
projectRouter.post("/upload", projectController.postProject);
projectRouter.use("/create", projectController.addProject);
// projectRouter.use("/", userController.getUsers);
 
module.exports = projectRouter;