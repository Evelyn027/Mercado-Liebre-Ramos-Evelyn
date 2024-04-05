const path = require('node:path');
const data = require('../model/products.json')

const controller = {
    renderHome: (req, res) =>{
        /* const pathHome = path.join(__dirname, '../views/home.html');
        res.sendFile(pathHome); */
        res.render('home.ejs', { products: data.products });
    }
} 

/* class HomeController {
    static renderHome(req, res) {
        res.render('home.ejs', { products: data.products })
    }
    } */
module.exports = controller;