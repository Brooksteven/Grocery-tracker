const User = require('./User');
const Items = require('./Items');

User.hasMany(Items, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Items.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Items };
