// build your `/api/projects` router here
const express = require('express');
const projects = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.findAllProjects()
        .then( projects => {
            res.status(200).json(projects);
        })
});

router.post('/', (req, res) => {
    const newProject = req.body;
    projects.createProject(newProject)
        .then( e => {
            res.status(201).json(e)
        })
});

module.exports = router;