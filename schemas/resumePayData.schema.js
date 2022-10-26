const Joi = require('joi');

const id = Joi.number().integer();
const id_resume_pay = Joi.number().integer();
const id_city = Joi.string().min(3).max(30);
const code = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const id_job = Joi.number().integer();
const deposit = Joi.number().precision(2);
const salary = Joi.number().precision(2);
const infonavit = Joi.number().precision(2);
const fonacot = Joi.number().precision(2);
const overtime = Joi.number().precision(2);
const total_pay = Joi.number().precision(2);
const faults = Joi.number().integer();
const comment = Joi.string().min(3).max(30);
const id_construction_site = Joi.number().integer();
const id_resident = Joi.number().integer();
const id_user = Joi.number().integer();



const getEmployeSchema = Joi.object({
  id: id.required(),
});

const createEmployeSchema = Joi.object({
  id_resume_pay: id_resume_pay.required(),
  id_city: id_city.required(),
  code: code.required(),
  name: name.required(),
  id_job: id_job.required(),
  deposit: deposit.required(),
  salary: salary.required(),
  infonavit: infonavit.required(),
  fonacot: fonacot.required(),
  overtime: overtime.required(),
  total_pay: total_pay.required(),
  faults: faults.required(),
  comment: comment.required(),
  id_construction_site: id_construction_site.required(),
  id_resident: id_resident.required(),
  id_user: id_user.required(),
});


const updateEmployeSchema = Joi.object({
  id_resume_pay,
  id_city,
  code,
  name,
  id_job,
  deposit,
  salary,
  infonavit,
  fonacot,
  overtime,
  total_pay,
  faults,
  comment,
  id_construction_site,
  id_resident,
});

module.exports = { getEmployeSchema, createEmployeSchema, updateEmployeSchema };
