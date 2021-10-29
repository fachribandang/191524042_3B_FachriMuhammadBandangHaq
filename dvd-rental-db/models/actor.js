const Sequelize = require('sequelize');
const db = require('../config/database');

const actor = db.define("actor", {
    actor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    first_name: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "f"
    },
    last_name: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "f"
    },
    last_update: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "2013-05-26 14:50:58.951+07"
    }
}, { 
    tableName : 'actor',
    schema: 'public',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = actor;