const path = require('node:path');

const controller = {
    renderHome: (req, res) =>{
        const pathHome = path.join(__dirname, '../views/home.html');
        res.sendFile(pathHome);
    }
}
module.exports = controller;