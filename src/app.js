const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.static('public'));

/*-----ROUTES-----*/
/* app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
}); */
const homeRouter = require('./routes/homeRoutes.js');
app.use('/', homeRouter);

/* app.get('/register', (req, res) => {
    // res.sendFile(path.join(__dirname, '/views/register.html'))
    res.sendFile(`${__dirname}/views/register.html`)
}); */

/* app.get('/login', (req, res) => {
    // res.sendFile(path.join(__dirname, '/views/login.html'))
    res.sendFile(`${__dirname}/views/login.html`)
}); */


/*-----CONFIGURACION DE SERVIDOR-----*/
/* app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
});  */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
