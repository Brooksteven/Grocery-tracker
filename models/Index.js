const User = require('./User');
const KwikE = require('./KwikE');

User.hasMany(KwikE, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

KwikE.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, KwikE };
