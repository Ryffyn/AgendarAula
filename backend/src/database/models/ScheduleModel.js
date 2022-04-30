const { Sequelize } = require('sequelize')
const UserModel = require('./UserModel')
const database = require('../index')

const ScheduleModel = database.define('schedule', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(128),
    allowNull: false
  },
  teacher: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
       allowNull: false
  }
}, { timestamps: false,
     timezone: '-04:00',
     freezeTableName: true,
     createAt:false,
     updateAt:false })


UserModel.hasMany(ScheduleModel, {
        foreignKey: 'userId'
      })     

module.exports = ScheduleModel