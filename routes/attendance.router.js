const express = require('express');

const AttendanceService = require('../services/attendance.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAttendanceSchema, getAttendanceSchema, updateAttendanceSchema } = require('../schemas/attendance.schema');

const router = express.Router();
const service = new AttendanceService();

router.get('/list/:id_resume_pay',
  async (req, res, next) => {
    try {
      const { id_resume_pay } = req.params;
      const Attendance = await service.find(id_resume_pay);
      res.json(Attendance);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createAttendanceSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAttendance = await service.create(body);
      res.status(201).json(newAttendance);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getAttendanceSchema, 'params'),
  validatorHandler(updateAttendanceSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Attendance = await service.update(id, body);
      res.json(Attendance);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getAttendanceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newAttendance = await service.delete(id);
      res.status(201).json(newAttendance);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
