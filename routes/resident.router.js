const express = require('express');

const ResidentService = require('./../services/resident.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createResidentSchema, getResidentSchema, updateResidentSchema } = require('./../schemas/resident.schema');

const router = express.Router();
const service = new ResidentService();

router.get('/list/:id_user',
  async (req, res, next) => {
    try {
      const { id_user } = req.params;
      const Resident = await service.find(id_user);
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

router.post('/delete/:id_resident',
  validatorHandler(getResidentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_resident } = req.params;
      const newResident = await service.delete(id_resident);
      res.status(201).json(newResident);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
