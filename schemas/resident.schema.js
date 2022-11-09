const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const id_business = Joi.number().integer();
const id_user = Joi.number().integer();

const getResidentSchema = Joi.object({
  id: id.required(),
});

const createResidentSchema = Joi.object({
  name: name,
  id_business: id_business.required(),
  id_user: id_user.required(),
});

const updateResidentSchema = Joi.object({
  name,
  id_business,
});

module.exports = {
  getResidentSchema,
  createResidentSchema,
  updateResidentSchema,
};
