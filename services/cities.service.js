const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CitiesService {
  constructor() {}

  async create(data) {
    const newCities = await models.Cities.create({
      ...data,
    });
    return newCities;
  }

  async find(id_business) {
    const rta = await models.Cities.findAll({
      where: { id_business: id_business }
    });
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.Cities.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const cities = await models.Cities.findByPk(id);
    if (!cities) {
      throw boom.notFound('cities not found');
    }
    return cities;
  }

  async update(id, changes) {
    const cities = await this.findOne(id);
    const res = await cities.update(changes);
    return res;
  }

  async delete(id) {
    const cities = await this.findOne(id);
    await cities.destroy();
    return { id };
  }


}

module.exports = CitiesService;
