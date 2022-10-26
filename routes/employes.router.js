const express = require('express');

const EmployeService = require('../services/Employes.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createEmployeSchema, getEmployeSchema, updateEmployeSchema } = require('../schemas/Employes.schema');

const router = express.Router();
const service = new EmployeService();

router.get('/list/:id_contractor',
  async (req, res, next) => {
    try {
      const { id_contractor } = req.params;
      const employees = await service.find(id_contractor);
      res.json(employees);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createEmployeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEmploye = await service.create(body);
      res.status(201).json(newEmploye);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getEmployeSchema, 'params'),
  validatorHandler(updateEmployeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Employe = await service.update(id, body);
      res.json(Employe);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getEmployeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newBusiness = await service.delete(id);
      res.status(201).json(newBusiness);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
