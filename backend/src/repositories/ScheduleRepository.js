const ScheduleModel = require('../database/models/ScheduleModel')
const UserModel = require('../database/models/ScheduleModel')

class ScheduleRepository {
  async add(schedule) {
    try {
      return await ScheduleModel.create(schedule)
    } catch (error) {
      console.log('Erro ao salvar um schedule -', error.message)
    }
  }

  async selectAll() {
    try {
      return await ScheduleModel.findAll({ UserModel })
    } catch (error) {
      console.log('Erro ao selecionar vários schedule -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await ScheduleModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro vários schedule -', error.message)
    }
  }

  async update(id,schedule) {
    try {
      return await ScheduleModel.update(schedule, { 
        where: {
          id: id
        }
      })
    } catch (error) {
      console.log('Erro ao editar um schedule -', error.message)
    }
  }

  async remove(id) {
    try {
      return await ScheduleModel.destroy({
        where: {
          id:id
        }
      })
    } catch (error) {
      console.log('Erro ao remover um schedule -', error.message)
    }
  }
}

module.exports = ScheduleRepository