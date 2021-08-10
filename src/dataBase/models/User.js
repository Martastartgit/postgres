const { DataTypes, Model } = require('sequelize');

const { tableName } = require('../../constants');
const { sequelize } = require('../index');
const Token = require('./Token');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true,
            allowNull: false
        },

        phone: {
            type: DataTypes.STRING

        },

        password: {
            type: DataTypes.STRING
        }

    },
    {
        sequelize,
        timestamps: false,
        tableName: tableName.USERS
    }
);
User.hasMany(Token, { foreignKey: 'userId' });

module.exports = User;
