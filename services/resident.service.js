const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ResidentService {
  constructor() {}

  async create(data) {
    const newResident = await models.Resident.create({
      ...data,
    });
    return newResident;
  }

  async find(id_business) {
    const response = await models.Resident.findAll({
      where: { id_business: id_business }
    });
    return response;
  }

  async findOne(id) {
    const resident = await models.Resident.findByPk(id);
    if (!resident) {
      throw boom.notFound('resident not found');
    }
    return resident;
  }

  async update(id, changes) {
    const resident = await this.findOne(id);
    const res = await resident.update(changes);
    return res;
  }

  async delete(id) {
    const resident = await this.findOne(id);
    await resident.destroy();
    return { id };
  }


}

module.exports = ResidentService;
