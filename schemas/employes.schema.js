const Joi = require('joi');

const id = Joi.number().integer();
const id_city = Joi.number().integer();
const code = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const id_job = Joi.number().integer();
const infonavit = Joi.number().precision(2);
const fonacot = Joi.number().precision(2);
const id_contractor = Joi.number().integer();
const id_user = Joi.number().integer();


const getEmployeSchema = Joi.object({
  id: id.required(),
});

const createEmployeSchema = Joi.object({
  name: name.required(),
  id_city: id_city.required(),
  code: code.required(),
  id_job: id_job.required(),
  infonavit: infonavit,
  fonacot: fonacot,
  id_contractor: id_contractor.required(),
  id_user: id_user.required(),
});


const updateEmployeSchema = Joi.object({
  name,
  id_city,
  code,
  id_job,
  infonavit,
  fonacot,
});

module.exports = { getEmployeSchema, createEmployeSchema, updateEmployeSchema };
