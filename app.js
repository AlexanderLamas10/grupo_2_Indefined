const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, '');


app.listen(3000, () => {
    console.log("Servidor funcionando");
});

app.use(express.static(publicPath));

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view/index.html"));
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view/productCart.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view/login.html"));
});

app.get("/Producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view/productDetail.html"));
});