const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const ResumePayController = require('../controllers/ResumePayController');
const controller = new ResumePayController();
class ResumePayService {
  constructor() {}

  async create(data) {
    const newResumePay = await models.ResumePay.create({
      ...data,
    });
    await controller.CreateData(newResumePay.id, newResumePay.id_contractor);
    return newResumePay;
  }

  async find(id_contractor) {
    const rta = await models.ResumePay.findAll({
      where: { id_contractor: id_contractor }
    });
    return rta;
  }

  async findOne(id) {
    const ResumePay = await models.ResumePay.findByPk(id);
    if (!ResumePay) {
      throw boom.notFound('ResumePay not found');
    }
    return ResumePay;
  }

  async update(id, changes) {
    const ResumePay = await this.findOne(id);
    const res = await ResumePay.update(changes);
    return res;
  }

  async delete(id) {
    const ResumePay = await this.findOne(id);
    await models.ResumePayData.destroy({
      where: { id_resume_pay: id }
    });
    const res = await ResumePay.destroy();
    return res;
  }
}

module.exports = ResumePayService;
