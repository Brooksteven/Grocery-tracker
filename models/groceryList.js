const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

<<<<<<<< HEAD:models/Items.js
class Items extends Model {}

Items.init(
========
class List extends Model {}

List.init(
>>>>>>>> 758df52aedd72c4b93622134b1b0e1b42bee3f6c:models/groceryList.js
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
<<<<<<<< HEAD:models/Items.js
    modelName: 'Items',
  }
);

module.exports = Items;
========
    modelName: 'List',
  }
);

module.exports = List;
>>>>>>>> 758df52aedd72c4b93622134b1b0e1b42bee3f6c:models/groceryList.js
