const express = require('express');
const app = express(); //instantiate express in app
const cors = require('cors');
const morgan = require('morgan');

const PORT = 3100;

const controllers = require('./controllers/controllers')
const LeaseControllers = require('./controllers/LeaseController')
app.use(express.urlencoded({ extended: true }))

app.use(express.json({ type: "*/*" }))

app.use(cors())

app.use(morgan('dev')); //middleware, every time that someone connects to the servers, prints it


app.post('/signUp', controllers.SignUp); //definition of a route: app(instance of express).HTTPmethod('route',callback)

app.post('/signIn', controllers.SignIn);

app.post('/createLease', LeaseControllers.CreateLease);

app.get('/getLeases/:id', LeaseControllers.GetLeases)

app.delete('/deleteLease/:id', LeaseControllers.DeleteLease)

app.put('/editLease/:id', LeaseControllers.EditLease)

app.listen(PORT, () => {
    console.log("The server is running on port " + PORT); //this line runs the server on the port 3100
})