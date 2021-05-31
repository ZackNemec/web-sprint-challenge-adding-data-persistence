// build your `Resource` model here
const db = require('../../data/dbConfig.js');

async function findAllResources() {
    const resources = await db('resources');
    return resources;
} 

async function addResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return db('resources').where('r.resource_id', resource_id).first();
}

module.exports = {
    findAllResources,
    addResource,
} 