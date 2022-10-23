const express = require('express');

const ContractorService = require('../services/contractor.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createContractorSchema, getContractorSchema, updateContractorSchema } = require('../schemas/Contractor.schema');

const router = express.Router();
const service = new ContractorService();

router.get('/list/:id_user',
  async (req, res, next) => {
    try {
      const { id_user } = req.params;
      const contractor = await service.find(id_user);
      res.json(contractor);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createContractorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newContractor = await service.create(body);
      res.status(201).json(newContractor);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id_contractor',
  validatorHandler(getContractorSchema, 'params'),
  validatorHandler(updateContractorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id_contractor } = req.params;
      const body = req.body;
      const contractor = await service.update(id_contractor, body);
      res.json(contractor);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id_contractor',
  validatorHandler(getContractorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_contractor} = req.params;
      const newContractor = await service.delete(id_contractor);
      res.status(201).json(newContractor);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
