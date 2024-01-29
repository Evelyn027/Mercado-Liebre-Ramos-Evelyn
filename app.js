const { log } = require("console");
const express = require("express");
const path = require("path");
const { isDeepStrictEqual } = require("util");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

/* CONFIGURACION DE SERVIDOR*/
/* app.listen(3500, () => {
    console.log('Servidor corriendo');
}); */

const port = process.env.PORT || 3001;
/* app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
}); */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});


/* ROUTES */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "home.html"));
});
