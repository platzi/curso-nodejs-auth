'use strict';

const { USER_TABLE } = require('./../models/user.model');
const { CUSTOMER_TABLE } = require('./../models/customer.model');
const { BUSINESS_TABLE } = require('./../models/business.model');
const { CONSTRUCTION_SITE_TABLE } = require('./../models/construction_site.model');
const { RESIDENT_TABLE } = require('./../models/resident.model');
const { CONTRACTOR_TABLE } = require('./../models/contractor.model');
const { EMPLOYES_TABLE } = require('./../models/employes.model');
const { JOBS_TABLE } = require('./../models/jobs.model');
const { RESUME_PAY_TABLE } = require('./../models/resume_pay.model');
const { RESUME_PAY_DATA_TABLE } = require('./../models/resume_pay_data.model');
const { CITIES_TABLE } = require('./../models/cities.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'customer'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });
    await queryInterface.createTable(CUSTOMER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        field: 'last_name',
      },
      phone: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
    await queryInterface.createTable(BUSINESS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      reg_patronal: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'XXXXXXXX-XXXX'
      },
      rfc: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'XXXXXXXXXXXXXXXXXX'
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });
    await queryInterface.createTable(CITIES_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      id_business: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });
    await queryInterface.createTable(CONSTRUCTION_SITE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      location: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'XXXXXXXX-XXXX'
      },
      id_business: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_resident: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable(RESIDENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      id_business: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable(CONTRACTOR_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      rfc: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_business: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable(EMPLOYES_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      code: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      id_job: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      infonavit: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      fonacot: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_contractor: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable(JOBS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      salary: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT,
      },
      id_business: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable(RESUME_PAY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      period: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      id_contractor: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.createTable(RESUME_PAY_DATA_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      id_resume_pay: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      code: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      id_job: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      deposit: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      salary: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      infonavit: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      fonacot: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      overtime: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      total_pay: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      faults: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      comment: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      id_construction_site: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      id_resident: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      id_user: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });


  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(RESUME_PAY_DATA_TABLE);
    await queryInterface.dropTable(RESUME_PAY_TABLE);
    await queryInterface.dropTable(JOBS_TABLE);
    await queryInterface.dropTable(EMPLOYES_TABLE);
    await queryInterface.dropTable(CONTRACTOR_TABLE);
    await queryInterface.dropTable(CONSTRUCTION_SITE_TABLE);
    await queryInterface.dropTable(RESIDENT_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CITIES_TABLE);
  }
};
