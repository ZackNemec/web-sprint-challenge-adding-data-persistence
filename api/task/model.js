// build your `Task` model here
const db = require('../../data/dbConfig.js');

const toBool = (num) => {
    num == 0 ? false : true;
};
async function findAllTasks() {

    const tasks = await db.select('t.*', 'p.project_description', 'p.project_name').from('projects as p').join('tasks', 'p.project_id', 't.project_id')
    const data = tasks.map( (task) => {
        task.task_completed = toBool(task.task_completed);
    }); 

    return tasks;
}
async function addTask(task) {
    const [task_id] = await db('tasks').insert(task);
    const newTask = await db('tasks').where('t.task_id', task_id);
    const data = newTask.map( (task) => {
        task.task_completed = toBool(task.task_completed);
    });
    return newTask[0];
}
module.exports = {
    findAllTasks,
    addTask
}