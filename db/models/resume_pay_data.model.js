const { Model, DataTypes, Sequelize } = require('sequelize');

const RESUME_PAY_DATA_TABLE = 'resume_pay_data';

const ResumePayDataSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_resume_pay: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  id_city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  code: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  id_job: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  deposit: {
    allowNull: false,
    type: DataTypes.DECIMAL(65, 2),
  },
  salary: {
    allowNull: false,
    type: DataTypes.DECIMAL(65, 2),
  },
  infonavit: {
    allowNull: false,
    type: DataTypes.DECIMAL(65, 2),
  },
  fonacot: {
    allowNull: false,
    type: DataTypes.DECIMAL(65, 2),
  },
  overtime: {
    allowNull: false,
    type: DataTypes.DECIMAL(65, 2),
  },
  total_pay: {
    allowNull: false,
    type: DataTypes.DECIMAL(65, 2),
  },
  faults: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  comment: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  id_construction_site: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  id_resident: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  id_user: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class ResumePayData extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: RESUME_PAY_DATA_TABLE,
      modelName: 'ResumePayData',
      timestamps: false
    }
  }
}


module.exports = { RESUME_PAY_DATA_TABLE, ResumePayDataSchema, ResumePayData }
