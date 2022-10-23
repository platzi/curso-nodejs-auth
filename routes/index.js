const express = require('express');

const usersRouter = require('./users.router');
const authRouter = require('./auth.router');
const businessRouter = require('./business.router');
const constructionSiteRouter = require('./constructionSite.router');
const contractorRouter = require('./contractor.router');
const residentRouter = require('./resident.router');
const citiesRouter = require('./cities.router');
const JobsRouter = require('./jobs.router');



function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/business', businessRouter);
  router.use('/constructionSite', constructionSiteRouter);
  router.use('/resident', residentRouter);
  router.use('/contractor', contractorRouter);
  router.use('/cities', citiesRouter);
  router.use('/jobs', JobsRouter);
}

module.exports = routerApi;
