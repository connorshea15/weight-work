//
//
// I don't think I will even need this model!!! because I can just query workouts with the user_id of whomever I am looking for!


const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class UserWorkout extends Model {}

UserWorkout.init(
    // Table column definitions
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        workout_name: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: 'userworkout'
    }
);

module.exports = UserWorkout;