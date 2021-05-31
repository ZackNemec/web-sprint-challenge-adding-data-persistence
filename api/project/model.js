// build your `Project` model here
const db = require('../../data/dbConfig.js');

const toBool = (num) => {
num == 0 ? false : true;
};

async function findAllProjects() {
    const projects = await db('projects');
    console.log(projects);

    const data = projects.map( (e) => {
        e.project_completed = toBool(e.project_completed);
    });
    return projects;

}


async function addProject(project) {
    const [project_id] = await db('projects').insert(project);
    const newProject = await db('projects').where('p.project_id', project_id);

    const data = newProject.map( (e) => {
        e.project_completed = toBool(e.project_completed);
    });

    return newProj[0];
}

module.exports = {
    findAllProjects,
    addProject
}