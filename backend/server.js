const express = require("express");

function data(login, password) {
    this.login = login;
    this.password = password;
}

const app = express();
const {login} = require("./controllers/login")

app.get("/login", login);

app.listen(8080);
