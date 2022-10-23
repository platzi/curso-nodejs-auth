const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const salary = Joi.number().precision(2);
const id_business = Joi.number().integer();
const id_user = Joi.number().integer();
const createdAt = Joi.date();

const getJobsSchema = Joi.object({
  id: id.required(),
});

const createJobsSchema = Joi.object({
  name: name.required(),
  salary: salary.required(),
  id_business: id_business.required(),
  id_user: id_user.required()
});

const updateJobsSchema = Joi.object({
  id,
  name,
  salary,
  id_business,
  id_user,
  createdAt,
});

module.exports = { getJobsSchema, createJobsSchema, updateJobsSchema };
