const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ResumePayDataService {
  constructor() {}

  async create(data) {
    const newResumePayData = await models.ResumePayData.create({
      ...data,
    });
    return newResumePayData;
  }

  async find(id_resume_pay) {
    const rta = await models.ResumePayData.findAll({
      where: { id_resume_pay: id_resume_pay }
    });
    return rta;
  }

  async findOne(id) {
    const ResumePayData = await models.ResumePayData.findByPk(id);
    if (!ResumePayData) {
      throw boom.notFound('ResumePayData not found');
    }
    return ResumePayData;
  }

  async update(id, changes) {
    const ResumePayData = await this.findOne(id);
    const res = await ResumePayData.update(changes);
    return res;
  }

  async delete(id) {
    const ResumePayData = await this.findOne(id);
    await ResumePayData.destroy();
    return { id };
  }


}

module.exports = ResumePayDataService;
