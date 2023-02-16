const sequelize = require('../config/connection');
const { User, Items } = require('../models');

const userData = require('./user-seed.json');
const giftData = require('./items-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // we need to use bcrypt each userData.password
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Gifts.bulkCreate(itemData);

  process.exit(0);

};

seedDatabase();
