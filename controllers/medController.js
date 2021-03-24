const db = require("../models");


module.exports = {

    createRec: (req, res) => {
        console.log("\nCREATED REC\n");
        // console.warn(req.body);
        db.Medication.create({
            medName: req.body.medication,
            medPresciber: req.body.prescribed_by,
            medFrequency: req.body.frequency,
            medNotes: req.body.notes
        })
        .then((dbMedication) => res.json(dbMedication))
        .catch(err => { console.error(err); res.send(500) });
    },
    
}