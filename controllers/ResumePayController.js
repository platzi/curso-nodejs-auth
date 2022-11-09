const EmployeService = require('../services/employes.service');
const ResumePayDataService = require('../services/resumePayData.service');
const Employees = new EmployeService();
const ResumePayData = new ResumePayDataService();

class ResumePayController {
  constructor() {}

  async CreateData(id_resume, id_contractor) {
    const employes = await Employees.find(id_contractor);
    employes.forEach(async (employe) => {
      const payload = {
        id_resume_pay: id_resume,
        id_city: employe.id_city,
        code: employe.code,
        name: employe.name,
        id_job: employe.id_job,
        deposit: 0,
        salary:  0,
        infonavit: employe.infonavit,
        fonacot: employe.fonacot,
        overtime: 0,
        total_pay: 0,
        faults: 0,
        comment: '',
        id_construction_site: 0,
        id_resident: 0,
        id_user: employe.id_user,
      };
      await ResumePayData.create(payload);
    });
    return;
  }
}

module.exports = ResumePayController;
