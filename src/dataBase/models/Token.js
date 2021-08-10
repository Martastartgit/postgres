const { DataTypes, Model } = require('sequelize');

const { tableName } = require('../../constants');
const { sequelize } = require('../index');

class Token extends Model { }

Token.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: tableName.TOKENS
    }
);

module.exports = Token;
