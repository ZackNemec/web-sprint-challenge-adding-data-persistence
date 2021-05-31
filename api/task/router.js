// build your `/api/tasks` router here
const express = require('express');
const tasks = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
    tasks.findAllTasks()
        .then( e => {
            res.status(200).json(e);
        })
});

router.post('/', (req, res) => {
    const newTask = req.body;
    newTask.addTask(e)
        .then( e => {
            res.status(201).json(e);
        })
})

module.exports = router;