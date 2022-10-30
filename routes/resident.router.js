const express = require('express');

const ResidentService = require('./../services/resident.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createResidentSchema, getResidentSchema, updateResidentSchema } = require('./../schemas/resident.schema');

const router = express.Router();
const service = new ResidentService();

router.get('/list/:id_business',
  async (req, res, next) => {
    try {
      const { id_business } = req.params;
      const Resident = await service.find(id_business);
      res.json(Resident);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createResidentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newResident = await service.create(body);
      res.status(201).json(newResident);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id_resident',
  validatorHandler(getResidentSchema, 'params'),
  validatorHandler(updateResidentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id_resident } = req.params;
      const body = req.body;
      const Resident = await service.update(id_resident, body);
      res.json(Resident);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getResidentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newResident = await service.delete(id);
      res.status(201).json(newResident);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
