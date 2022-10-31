const { Model, DataTypes, Sequelize } = require('sequelize');

const ATTENDANCE_TABLE = 'attendance';

const AttendanceSchema = {
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
  id_construction_site: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  monday: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  tuesday: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  wednesday: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  thursday: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  friday: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  saturday: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  sunday: {
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

class Attendance extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ATTENDANCE_TABLE,
      modelName: 'attendance',
      timestamps: false
    }
  }
}


module.exports = { ATTENDANCE_TABLE, AttendanceSchema, Attendance }
