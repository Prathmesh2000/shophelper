'use strict';
const { Sequelize } = require("sequelize/dist");
const sequelize = require("./database/connection");

const Users = sequelize.define("users",{
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull:false
    },
    access: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: JSON.stringify({
          read: true,
          write: false
        })
    },
    created_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
})
module.exports = Users