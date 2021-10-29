const Sequelize = require('sequelize');
const db = require('../config/database');

const language = db.define("language", {
    language_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "0"
    },
    last_update: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "2013-05-26 14:50:58.951+07"
    }
}, { 
    tableName : 'language',
    schema: 'public',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = language;