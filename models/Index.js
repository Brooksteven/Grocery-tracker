const User = require('./User');
const Kwik-E = require('./Kwik-E');

User.hasMany(Kwik-E, {
  foreignKey: 'user_id',
});

Kwik-E.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Kwik-E };
