const express = require("express");
const app = express();
const path = require("path");

app.use('/public',express.static('public'));

/* CONFIGURACION DE SERVIDOR*/

const port = process.env.PORT || 3001;
/* app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
});  */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});


/* ROUTES */
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
});

app.get('/login', (req, res) => {
    // res.sendFile(path.join(__dirname, '/views/login.html'))
    res.sendFile(`${__dirname}/views/login.html`)
});

app.get('/register', (req, res) => {
    // res.sendFile(path.join(__dirname, '/views/register.html'))
    res.sendFile(`${__dirname}/views/register.html`)
});
