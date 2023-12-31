let controllers = {};
const db = require('../models');
const Users = db.users

controllers.SignUp = async (req, res) => {
    try {
        let { username, password, email } = req.body;
        let userExists = await Users.findOne({ //Table.finOne({where:{field:valueToCompare}})
            where: {
                email,
            },
        });
        let emailExists = await Users.findOne({//This method returns weather a user if it finds something, or null if it doesn't
            where: {
                username,
            },
        });
        if (emailExists == null && userExists == null) {
            let newUser = {
                username,
                password,
                email
            }
            let userCreation = await Users.create(newUser) //creates a new row, table.create(objectForRow)
            res.status(200).send({ creation: true, messege: "Your account has been created" });
        } else {
            res.send({ creation: false, messege: "Either the mail or the user are already used" })
        }
    } catch (error) {
        console.log("An error ocurred: " + error);
    }

}
controllers.SignIn = async (req, res) => {
    let { username, password } = req.body;
    let UserExists = Users.findOne({
        where: {
            username,
        }
    })
    if (UserExists == null) {
        res.send({ signedIn: false, messege: "El usuario no existe" })
    } else {
        let ValidateUser = await Users.findOne({
            where: {
                username,
            }
        })
        let ValidatePassword = await Users.findOne({
            where: {
                password,
            }
        })

        if (ValidatePassword == null || ValidateUser == null) {
            res.send({ signedIn: false, messege: "El usuario y/o contraseña son incorrectas" })
        } else {
            res.send({ signedIn: true, messege: "Inicio de sesion exitoso, redirigiendo", userId: ValidateUser.id })
        }
    }
}


module.exports = controllers