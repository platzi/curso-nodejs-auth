const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const reg_patronal = Joi.string().max(20);
const rfc =  Joi.string().max(20);
const id_user = Joi.number().integer();

const getBusinessSchema = Joi.object({
  id: id.required(),
});

const createBusinessSchema = Joi.object({
  name: name,
  reg_patronal: reg_patronal.required(),
  rfc: rfc.required(),
  id_user: id_user.required()
});

const updateBusinessSchema = Joi.object({
  name,
  reg_patronal,
  rfc,
});

module.exports = { getBusinessSchema, createBusinessSchema, updateBusinessSchema };
