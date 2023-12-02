const LeaseControllers = {};
const db = require('../models');
const Leases = db.leases;

LeaseControllers.CreateLease = async (req, res) => {
    try {
        const LeaseExists = await Leases.findOne({
            where: {
                addres: req.body.addres
            }
        })
        if (LeaseExists == null) {
            const CreateLease = await Leases.create(req.body);
            res.send({ "messege": "Lease added succesfuly" })
        } else {
            res.send("This lease already exists")
        }

    } catch (error) {
        console.log('An error ocurred while inserting a lease: ' + error);
    }
}
LeaseControllers.GetLeases = async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        let FindLeasesof = await Leases.findAll({ where: { userFK: id } })
        res.send(FindLeasesof)
    } catch (error) {
        console.log("An errot ocurred while finding a user the leases of an user: " + error);

    }
}
LeaseControllers.DeleteLease = async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        let deleteLeases = await Leases.destroy({
            where: { id: id }
        })
        console.log(deleteLeases);
        res.send({ msg: "Alquiler eliminado con exito" })
    } catch (error) {
        console.log('An error ocurred while deleting a lease ' + error);
    }
}
LeaseControllers.EditLease = async (req, res) => {
    try {
        console.log(req.body);
        let id = parseInt(req.params.id)
        let EditLeases = await Leases.update(req.body, { where: { id, id } })
        res.send({ msg: 'Alquiler editado con exito' })
    } catch (error) {
        console.log('An error ocurred while editing a lease ' + error);
    }
}
module.exports = LeaseControllers;