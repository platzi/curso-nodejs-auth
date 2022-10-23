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

  async find(id_user) {
    const response = await models.Resident.findAll({
      where: { id_user: id_user }
    });
    return response;
  }

  async findOne(id_resident) {
    const resident = await models.Resident.findByPk(id_resident);
    if (!resident) {
      throw boom.notFound('resident not found');
    }
    return resident;
  }

  async update(id_resident, changes) {
    const resident = await this.findOne(id_resident);
    const res = await resident.update(changes);
    return res;
  }

  async delete(id_resident) {
    const resident = await this.findOne(id_resident);
    await resident.destroy();
    return { id_resident };
  }

 
}

module.exports = ResidentService;
