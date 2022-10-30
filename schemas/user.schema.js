const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);
const name = Joi.string();
const id_contractor = Joi.number().integer();

const createUserSchema = Joi.object({
  name: name,
  email: email.required(),
  password: password.required(),
  role: role.required(),
  id_contractor: id_contractor,
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
