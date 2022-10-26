const { Model, DataTypes, Sequelize } = require('sequelize');

const JOBS_TABLE = 'jobs';

const JobsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  salary: {
    allowNull: false,
    type: DataTypes.DECIMAL(65, 2),
  },
  id_business: {
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

class Jobs extends Model {
    static config(sequelize) {
    return {
      sequelize,
      tableName: JOBS_TABLE,
      modelName: 'Jobs',
      timestamps: false
    }
  }
}


module.exports = { JOBS_TABLE, JobsSchema, Jobs }
