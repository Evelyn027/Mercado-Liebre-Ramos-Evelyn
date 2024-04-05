const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.static('public'));

// Indicamos el motor de plantilla
app.set('view engine', 'ejs')
//Direccionamos a las vistas
app.set('views', path.join(__dirname, '/views'))

/*-----ROUTES-----*/
const homeRouter = require('./routes/homeRoutes')
const userRouter = require('./routes/userRoutes')

app.use('/', homeRouter)
app.use('/user', userRouter)

/*-----CONFIGURACION DE SERVIDOR-----*/
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
