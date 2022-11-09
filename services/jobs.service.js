const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class JobsService {
  constructor() {}

  async create(data) {
   const newJobs = await models.Jobs.create({
     ...data,
   });
    return newJobs;
  }

  async find(id_business) {
    const rta = await models.Jobs.findAll({
      where: { id_business: id_business }
    });
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.Jobs.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const Jobs = await models.Jobs.findByPk(id);
    if (!Jobs) {
      throw boom.notFound('Jobs not found');
    }
    return Jobs;
  }

  async update(id, changes) {
    const Jobs = await this.findOne(id);
    const res = await Jobs.update(changes);
    return res;
  }

  async delete(id) {
    const Jobs = await this.findOne(id);
    await Jobs.destroy();
    return { id };
  }


}

module.exports = JobsService;
