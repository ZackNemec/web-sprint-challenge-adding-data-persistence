// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.findAllResources()
        .then( resources => {
            res.status(200).json(resources);
        })
});

router.post('/', (req, res) => {
    const newResource = req.body;
    Resources.addResource(newResource)
        .then( resource => {
            res.status(201).json(resource);
        })
})

module.exports = router;