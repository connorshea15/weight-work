const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    // Table column definitions
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    // Table Configuration Options
    {
        // simply passing in the database connection
        sequelize,
        // I would like to know when the user joined so we can track all progress
        timestamps: true,
        // just does not pluralize database name
        freezeTableName: true,
        // underscore instead of camelCase
        underscored:true,
        // model name stays lowercase in our database
        modelName: 'workout'
    }
);

module.exports = Workout;