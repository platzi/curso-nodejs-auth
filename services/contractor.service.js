const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ContractorService {
  constructor() {}

  async create(data) {
    const newContractor = await models.Contractor.create({
      ...data,
    });
    return newContractor;
  }

  async find(id_user) {
    const rta = await models.Contractor.findAll({
      where: { id_user: id_user }
    });
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.Contractor.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id_contractor) {
    const Contractor = await models.Contractor.findByPk(id_contractor);
    if (!Contractor) {
      throw boom.notFound('Contractor not found');
    }
    return Contractor;
  }

  async update(id_contractor, changes) {
    const Contractor = await this.findOne(id_contractor);
    const res = await Contractor.update(changes);
    return res;
  }

  async delete(id_contractor) {
    const Contractor = await this.findOne(id_contractor);
    await Contractor.destroy();
    return { id_contractor };
  }

 
}

module.exports = ContractorService;
