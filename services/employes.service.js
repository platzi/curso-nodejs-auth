const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class EmployeService {
  constructor() {}

  async create(data) {
    const newEmploye = await models.Employe.create({
      ...data,
    });
    return newEmploye;
  }

  async find(id_contractor) {
    const rta = await models.Employe.findAll({
      where: { id_contractor: id_contractor }
    });
    return rta;
  }

  async findOne(id) {
    const Employe = await models.Employe.findByPk(id);
    if (!Employe) {
      throw boom.notFound('Employe not found');
    }
    return Employe;
  }

  async update(id, changes) {
    const Employe = await this.findOne(id);
    const res = await Employe.update(changes);
    return res;
  }

  async delete(id) {
    const Employe = await this.findOne(id);
    await Employe.destroy();
    return { id };
  }


}

module.exports = EmployeService;
