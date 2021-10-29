const Sequelize = require('sequelize');
const db = require('../config/database');

const film = db.define("film", {
    film_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "0"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    release_year: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    language_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    rental_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    rental_rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    length: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    replacement_cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    rating: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    last_update: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "2013-05-26 14:50:58.951+07"
    },
    special_features: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    fulltext: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "dummy"
    }
}, { 
    tableName : 'film',
    schema: 'public',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = film;