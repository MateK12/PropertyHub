
const DBCONFIG = require('../DBConfig');

const PORT = 3100;
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize( //DB's configuration, I get the data from the DBconfig.js file
    DBCONFIG.DB,
    DBCONFIG.USER,
    DBCONFIG.PASSWORD,
    {
        host: DBCONFIG.HOST,
        port: DBCONFIG.PORT,
        dialect: DBCONFIG.dialect

    },
)
sequelize.authenticate() //Conection to the db whit the authenticate() method
    .then(() => { console.log("connected"); })
    .catch((err) => { console.log("An error ocurred: " + err); })

db = {};
users = require('./UserModel')(sequelize, DataTypes); //users equals the function that we get from UserModel.
leases = require('./LeaseModel')(sequelize, DataTypes)
//As arguments, we pass sequlize (the intansiation of Sequelize()) and DataTypes (a Sequelize object)

db.users = users;
db.leases = leases;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ force: false }) //This line syncs the tables with the DB,{force:false}-> This avoids the deletions of the current rows
    //if you change the model of any table, then switch force:true !This will delete the current content!
    .then(() => {
        console.log("re-sync executed correctly");
    })
    .catch((err) => {
        console.log("An error ocurred: " + err);
    })

module.exports = db