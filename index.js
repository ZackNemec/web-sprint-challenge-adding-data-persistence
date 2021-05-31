// start your server here
const server = require('./api/server.js');

const port = process.env.port || 5000;

server.listen(port, () => {
    console.log(`moving and grooving on port ${port}`);
});