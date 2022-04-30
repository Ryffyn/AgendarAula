const ProfileModel = require('../database/models/ProfileModel')

class ProfileRepository {
  async add(user) {
    try {
      return await ProfileModel.create(user)
    } catch (error) {
      console.log('Erro ao salvar um user -', error.message)
    }
  }

  async selectAll() {
    try {
      return await ProfileModel.findAll({ })
    } catch (error) {
      console.log('Erro ao selecionar   -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await ProfileModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro vários  -', error.message)
    }
  }

  async update(id,user) {
    try {
      return await ProfileModel.update(user, { 
        where: {
          id: id
        }
      })
    } catch (error) {
      console.log('Erro ao editar um user -', error.message)
    }
  }

  async remove(id) {
    try {
      return await ProfileModel.destroy({
        where: {
          id:id
        }
      })
    } catch (error) {
      console.log('Erro ao remover um user -', error.message)
    }
  }
}

module.exports = ProfileRepository