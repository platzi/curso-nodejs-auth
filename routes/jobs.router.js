const express = require('express');

const JobsService = require('../services/jobs.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createJobsSchema, getJobsSchema, updateJobsSchema } = require('../schemas/Jobs.schema');

const router = express.Router();
const service = new JobsService();

router.get('/list/:id_business',
  async (req, res, next) => {
    try {
      const { id_business } = req.params;
      const Jobs = await service.find(id_business);
      res.json(Jobs);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createJobsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newJobs = await service.create(body);
      res.status(201).json(newJobs);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getJobsSchema, 'params'),
  validatorHandler(updateJobsSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Jobs = await service.update(id, body);
      res.json(Jobs);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getJobsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newJobs = await service.delete(id);
      res.status(201).json(newJobs);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
