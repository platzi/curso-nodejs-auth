const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const id_business = Joi.number().integer();
const id_user = Joi.number().integer();

const getCitiesSchema = Joi.object({
  id: id.required(),
});

const createCitiesSchema = Joi.object({
  name: name,
  id_business: id_business.required(),
  id_user: id_user.required()
});

const updateCitiesSchema = Joi.object({
  name,
  id_business,
  id_user,
});

module.exports = { getCitiesSchema, createCitiesSchema, updateCitiesSchema };
