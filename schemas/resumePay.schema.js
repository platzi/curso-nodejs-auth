const Joi = require('joi');

const id = Joi.number().integer();
const period = Joi.date().iso();
const name = Joi.string().min(3).max(30);
const id_contractor = Joi.number().integer();
const id_user = Joi.number().integer();


const getResumePaySchema = Joi.object({
  id: id.required(),
});

const createResumePaySchema = Joi.object({
  name: name.required(),
  period: period.required(),
  id_contractor: id_contractor.required(),
  id_user: id_user.required(),
});


const updateResumePaySchema = Joi.object({
  name,
  period,
  id_contractor,
  id_user,
});

module.exports = { getResumePaySchema, createResumePaySchema, updateResumePaySchema };
