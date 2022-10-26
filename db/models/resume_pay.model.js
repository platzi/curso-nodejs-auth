const { Model, DataTypes, Sequelize } = require('sequelize');

const RESUME_PAY_TABLE = 'resume_pay';

const ResumePaySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_contractor: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  period: {
    allowNull: false,
    type: DataTypes.STRING,
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

class ResumePay extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: RESUME_PAY_TABLE,
      modelName: 'ResumePay',
      timestamps: false
    }
  }
}


module.exports = { RESUME_PAY_TABLE, ResumePaySchema, ResumePay }
