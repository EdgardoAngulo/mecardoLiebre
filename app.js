// Inicio de aplicación M04C02

const express = require("express");
const path = require("path");

const app = express();

// para indicarle a express cual es nuestra carpeta estatica
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath));

console.log(publicPath)

// Activamos el servidor en (escuchar)
// app.listen(3090, () => console.log("El servidor 3090 está activo")); 
app.listen(process.env.PORT || 3000, () => console.log("Server running in port 3000"))



// El indice - Menu
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

// El indice - Menu
app.get("/home", (request, response) => {
    response.sendFile(path.join(__dirname, "/views/home.html"))
});

// Register
app.get("/register", (request, response) => {
    response.sendFile(path.join(__dirname, "/views/register.html"))
});


// login
app.get("/login", (request, response) => {
    response.sendFile(path.join(__dirname, "/views/login.html"))
});
