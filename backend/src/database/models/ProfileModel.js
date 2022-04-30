const { Sequelize } = require('sequelize')
const database = require('../index')

const ProfileModel = database.define('profile', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  profile: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, { timestamps: false,
     freezeTableName: true,
     createAt:false,
     updateAt:false })

module.exports = ProfileModel