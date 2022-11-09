const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const rfc =  Joi.string().max(20);
const id_business = Joi.number().integer();
const id_user = Joi.number().integer();

const getContractorSchema = Joi.object({
  id: id.required(),
});

const createContractorSchema = Joi.object({
  name: name,
  rfc: rfc.required(),
  id_business: id_business.required(),
  id_user: id_user.required()
});

const updateContractorSchema = Joi.object({
  name,
  rfc,
  id_business,
  id_user
});

module.exports = { getContractorSchema, createContractorSchema, updateContractorSchema };