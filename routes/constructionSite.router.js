const express = require('express');

const ConstructionSiteService = require('./../services/constructionSite.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createConstructionSiteSchema, getConstructionSiteSchema, updateConstructionSiteSchema } = require('./../schemas/ConstructionSite.schema');

const router = express.Router();
const service = new ConstructionSiteService();

router.get('/list/:id_business',
  async (req, res, next) => {
    try {
      const { id_business } = req.params;
      const ConstructionSite = await service.find(id_business);
      res.json(ConstructionSite);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/register',
  validatorHandler(createConstructionSiteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newConstructionSite = await service.create(body);
      res.status(201).json(newConstructionSite);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/update/:id',
  validatorHandler(getConstructionSiteSchema, 'params'),
  validatorHandler(updateConstructionSiteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const ConstructionSite = await service.update(id, body);
      res.json(ConstructionSite);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/delete/:id',
  validatorHandler(getConstructionSiteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const newConstructionSite = await service.delete(id);
      res.status(201).json(newConstructionSite);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
