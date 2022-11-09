const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class BusinessService {
  constructor() {}

  async create(data) {
    const newBusiness = await models.Business.create({
      ...data,
    });
    return newBusiness;
  }

  async find(id_user) {
    const rta = await models.Business.findAll({
      where: { id_user: id_user }
    });
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.Business.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const business = await models.Business.findByPk(id);
    if (!business) {
      throw boom.notFound('business not found');
    }
    return business;
  }

  async update(id, changes) {
    const business = await this.findOne(id);
    const res = await business.update(changes);
    return res;
  }

  async delete(id) {
    const business = await this.findOne(id);
    await business.destroy();
    return { id };
  }


}

module.exports = BusinessService;
