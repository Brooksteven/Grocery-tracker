const User = require('./User');
const List = require('./groceryList');

User.hasMany(List, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

List.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, List };
