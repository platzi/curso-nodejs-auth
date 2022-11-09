const Joi = require('joi');

const id = Joi.number().integer();
const id_resume_pay = Joi.number().integer();
const id_city = Joi.string().min(3).max(30);
const code = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const id_job = Joi.number().integer();
const monday = Joi.number().integer();
const tuesday = Joi.number().integer();
const wednesday = Joi.number().integer();
const thursday = Joi.number().integer();
const friday = Joi.number().integer();
const saturday = Joi.number().integer();
const sunday = Joi.number().integer();
const id_construction_site = Joi.number().integer();
const id_user = Joi.number().integer();



const getAttendanceSchema = Joi.object({
  id: id.required(),
});

const createAttendanceSchema = Joi.object({
  id_resume_pay: id_resume_pay.required(),
  id_city: id_city.required(),
  code: code.required(),
  name: name.required(),
  id_job: id_job.required(),
  monday: monday,
  tuesday: tuesday,
  wednesday: wednesday,
  thursday: thursday,
  friday: friday,
  saturday: saturday,
  sunday: sunday,
  id_construction_site: id_construction_site.required(),
  id_user: id_user.required(),
});


const updateAttendanceSchema = Joi.object({
  id_resume_pay,
  id_city,
  code,
  name,
  id_job,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  id_construction_site,
});

module.exports = { getAttendanceSchema, createAttendanceSchema, updateAttendanceSchema };
