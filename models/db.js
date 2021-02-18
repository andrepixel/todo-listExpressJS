const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp','root','devboxwin', {
    host: 'localhost',
    dialect: 'mysql',
    // query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};