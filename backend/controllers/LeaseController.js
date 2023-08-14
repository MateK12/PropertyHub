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

module.exports = LeaseControllers;