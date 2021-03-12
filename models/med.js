const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Medication = sequelize.define("Medication", {
        medName: {
            type: DataTypes.STRING,
        },
        medPrescriber: {
            type: DataTypes.STRING,
        },
        medFrequency: {
            type: DataTypes.STRING,
        },
        medNotes: {
            type: DataTypes.STRING,
        }
    });
    Medication.associate = (models) => {
        Medication.hasMany(models.User, {
            onDelete: "cascade"
        });
    };
    return Medication;
};