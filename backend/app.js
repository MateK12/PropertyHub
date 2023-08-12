const express = require('express');
const app = express(); //instantiate express in app
const cors = require('cors');
const morgan = require('morgan');
const DBCONFIG = require('./DBConfig');

const PORT = 3100;
const { Sequelize, DataTypes } = require('sequelize');

const controllers = require('./controllers/controllers')

app.use(express.urlencoded({ extended: true }))

app.use(express.json({ type: "*/*" }))

app.use(cors())

app.use(morgan('dev')); //middleware, every time that someone connects to the servers, prints it


app.post('/signUp', controllers.SignUp); //definition of a route

app.post('/signIn', controllers.SignIn); //definition of a route

app.listen(PORT, () => {
    console.log("The server is running on port " + PORT); //this line runs the server on the port 3100
})