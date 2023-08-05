const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cointab', 'root', 'mysql98', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports={
    sequelize
}
