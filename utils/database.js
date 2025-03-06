//const Sequelize = require("sequelize");

//const sequelize = new Sequelize('expense','root','rajatraj',{
  //dialect: 'mysql',
 // host: 'localhost',
//})


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense', 'admin', 'rajatraj1234', {
  dialect: 'mysql',
  host: 'expense.cpw8a26ieb52.eu-north-1.rds.amazonaws.com',
  port: 3306, 
  logging: false,
});

module.exports = sequelize;
