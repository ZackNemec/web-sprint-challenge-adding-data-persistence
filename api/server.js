// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./project/router.js');

const resourceRouter = require('./resource/router.js');

const taskRouter = require('./task/router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);


server.get('/', (req, res) => {
    res.status(200).json({
        message: "biscuits"
    });
});


module.exports = server; 