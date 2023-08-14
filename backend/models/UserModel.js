
module.exports = (sequealize, DataTypes) => { //we export a function that returns an object with the information of the table model
    //pass sequelize and DataTypes as arguments,
    const Users = sequealize.define("users", {//sequalize.define("DBName",{DBModel})
        username: { //name of the column
            type: DataTypes.STRING, //Column's DataType
            allowNull: false, //Not nullable
            unique: true //is unique
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }
    );
    return Users //return the model

}