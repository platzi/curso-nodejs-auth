const express = require('express');

const ResumePayDataService = require('../services/resumePayData.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createResumePayDataSchema, getResumePayDataSchema, updateResumePayDataSchema } = require('../schemas/resumePayData.schema');

const router = express.Router();
const service = new ResumePayDataService();

router.get('/list/:id_resume_pay',
  async (req, res, next) => {
    try {
      const { id_resume_pay } = req.params;
      const ResumePayData = await service.find(id_resume_pay);
      res.json(ResumePayData);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createResumePayDataSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newResumePayData = await service.create(body);
      res.status(201).json(newResumePayData);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getResumePayDataSchema, 'params'),
  validatorHandler(updateResumePayDataSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const ResumePayData = await service.update(id, body);
      res.json(ResumePayData);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getResumePayDataSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newResumePayData = await service.delete(id);
      res.status(201).json(newResumePayData);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
