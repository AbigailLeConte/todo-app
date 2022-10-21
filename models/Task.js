const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
        };
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: Datatypes.STRING
            allowNull: false,
            validate: {
                len: [8],
            }
        };
    },
    {
        sequelize, 
        timestamps: true,
        freezeTableName: true, //by defalut, without true, table wtll be call users
        modelName: "task",
    }
    );