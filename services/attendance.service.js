const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class AttendanceService {
  constructor() {}

  async create(data) {
    const newAttendance = await models.Attendance.create({
      ...data,
    });
    return newAttendance;
  }

  async find(id_resume_pay) {
    const rta = await models.Attendance.findAll({
      where: { id_resume_pay: id_resume_pay }
    });
    return rta;
  }

  async findOne(id) {
    const Attendance = await models.Attendance.findByPk(id);
    if (!Attendance) {
      throw boom.notFound('Attendance not found');
    }
    return Attendance;
  }

  async update(id, changes) {
    const Attendance = await this.findOne(id);
    const res = await Attendance.update(changes);
    return res;
  }

  async delete(id) {
    const Attendance = await this.findOne(id);
    await Attendance.destroy();
    return { id };
  }


}

module.exports = AttendanceService;
