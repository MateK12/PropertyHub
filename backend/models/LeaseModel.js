module.exports = (sequealize, DataTypes) => { //we export a function that returns an object with the information of the table model
    //pass sequelize and DataTypes as arguments,
    const Leases = sequealize.define("leases", {//sequalize.define("DBName",{DBModel})
        addres: { //name of the column
            type: DataTypes.STRING,
            allowNull: false,
        },
        tenant: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        propertyCost: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        observation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        leasedSince: {
            type: DataTypes.DATE,
            allowNull: true
        },
        userFK: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users', // Name of the table that you want to reffer to
                key: 'id' // Name of the column of that table
            },
            onUpdate: 'CASCADE', //if the column is updated or deleted, will be changed automatically
            onDelete: 'CASCADE'
        }
    }
    );
    return Leases

}