const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Kwik-E extends Model {}

Kwik-E.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipientName: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Kwik-E',
  }
);

module.exports = Kwik-E;