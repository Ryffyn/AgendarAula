const { Sequelize } = require('sequelize')
const ProfileModel = require('./ProfileModel')
const database = require('../index')

const UserModel = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(128),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  profileId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { timestamps: false,
     freezeTableName: true,
     createAt:false,
     updateAt:false })

     
ProfileModel.hasOne(UserModel, {
  foreignKey: 'profileId'
})

module.exports = UserModel

