const express = require('express');

const BusinessService = require('./../services/business.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createBusinessSchema, getBusinessSchema, updateBusinessSchema } = require('./../schemas/business.schema');

const router = express.Router();
const service = new BusinessService();

router.get('/list/:id_user',
  async (req, res, next) => {
    try {
      const { id_user } = req.params;
      const business = await service.find(id_user);
      res.json(business);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createBusinessSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBusiness = await service.create(body);
      res.status(201).json(newBusiness);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getBusinessSchema, 'params'),
  validatorHandler(updateBusinessSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const business = await service.update(id, body);
      res.json(business);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id_business',
  validatorHandler(getBusinessSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_business } = req.params;
      const newBusiness = await service.delete(id_business);
      res.status(201).json(newBusiness);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
