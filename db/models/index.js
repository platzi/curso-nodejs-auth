const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Business, BusinessSchema } = require('./business.model');
const { ConstructionSite, ConstructionSiteSchema } = require('./construction_site.model');
const { Resident, ResidentSchema } = require('./resident.model');
const { Contractor, ContractorSchema } = require('./contractor.model');
const { Employes, EmployesSchema } = require('./employes.model');
const { Jobs, JobsSchema } = require('./jobs.model');
const { ResumePay, ResumePaySchema } = require('./resume_pay.model');
const { ResumePayData, ResumePayDataSchema } = require('./resume_pay_data.model');
const { Cities, CitiesSchema } = require('./cities.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Business.init(BusinessSchema, Business.config(sequelize));
  ConstructionSite.init(ConstructionSiteSchema, ConstructionSite.config(sequelize));
  Resident.init(ResidentSchema, Resident.config(sequelize));
  Contractor.init(ContractorSchema, Contractor.config(sequelize));
  Employes.init(EmployesSchema, Employes.config(sequelize));
  Jobs.init(JobsSchema, Jobs.config(sequelize));
  ResumePay.init(ResumePaySchema, ResumePay.config(sequelize));
  ResumePayData.init(ResumePayDataSchema, ResumePayData.config(sequelize));
  Cities.init(CitiesSchema, Cities.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);

}

module.exports = setupModels;
