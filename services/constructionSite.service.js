const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ConstructionSiteService {
  constructor() {}

  async create(data) {
    const newConstructionSite = await models.ConstructionSite.create({
      ...data,
    });
    return newConstructionSite;
  }

  async find(id_business) {
    const response = await models.ConstructionSite.findAll({
      where: { id_business: id_business }
    });
    return response;
  }

  async findOne(id) {
    const ConstructionSite = await models.ConstructionSite.findByPk(id);
    if (!ConstructionSite) {
      throw boom.notFound('ConstructionSite not found');
    }
    return ConstructionSite;
  }

  async update(id, changes) {
    const ConstructionSite = await this.findOne(id);
    const res = await ConstructionSite.update(changes);
    return res;
  }

  async delete(id) {
    const ConstructionSite = await this.findOne(id);
    await ConstructionSite.destroy();
    return { id };
  }


}

module.exports = ConstructionSiteService;
