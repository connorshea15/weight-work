const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    // Table column definitions
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
    },
    // Table Configuration Options
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // simply passing in the database connection
        sequelize,
        // I would like to know when the user joined so we can track all progress
        timestamps: true,
        // just does not pluralize database name
        freezeTableName: true,
        // underscore instead of camelCase
        underscored:true,
        // model name stays lowercase in our database
        modelName: 'user'
    }
);

module.exports = User;