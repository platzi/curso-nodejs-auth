const express = require('express');

const CitiesService = require('../services/cities.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCitiesSchema, getCitiesSchema, updateCitiesSchema } = require('../schemas/cities.schema');

const router = express.Router();
const service = new CitiesService();

router.get('/list/:id_business',
  async (req, res, next) => {
    try {
      const { id_business } = req.params;
      const cities = await service.find(id_business);
      res.json(cities);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createCitiesSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCities = await service.create(body);
      res.status(201).json(newCities);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getCitiesSchema, 'params'),
  validatorHandler(updateCitiesSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const cities = await service.update(id, body);
      res.json(cities);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getCitiesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newCities = await service.delete(id);
      res.status(201).json(newCities);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
