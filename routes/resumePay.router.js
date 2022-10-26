const express = require('express');

const ResumePayService = require('../services/ResumePay.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createResumePaySchema, getResumePaySchema, updateResumePaySchema } = require('../schemas/ResumePay.schema');

const router = express.Router();
const service = new ResumePayService();


router.get('/list/:id_contractor',
  async (req, res, next) => {
    try {
      const { id_contractor } = req.params;
      const resumePay = await service.find(id_contractor);
      res.json(resumePay);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createResumePaySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newResumePay = await service.create(body);
      res.status(201).json(newResumePay);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getResumePaySchema, 'params'),
  validatorHandler(updateResumePaySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const ResumePay = await service.update(id, body);
      res.json(ResumePay);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getResumePaySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newResumePay = await service.delete(id);
      res.status(201).json(newResumePay);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
