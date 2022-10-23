const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const location = Joi.string().max(100);
const id_business = Joi.number().integer();
const id_resident = Joi.number().integer();
const id_user = Joi.number().integer();
const create_at = Joi.date();

const getConstructionSiteSchema = Joi.object({
  id: id.required(),
});

const createConstructionSiteSchema = Joi.object({
  name: name,
  location: location.required(),
  id_business: id_business.required(),
  id_resident: id_resident.required(),
  id_user: id_user.required(),
});

const updateConstructionSiteSchema = Joi.object({
  name,
  location,
  id_business,
  id_resident,
  create_at,
});

module.exports = {
  getConstructionSiteSchema,
  createConstructionSiteSchema,
  updateConstructionSiteSchema,
};
