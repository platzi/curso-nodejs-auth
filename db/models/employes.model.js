const { Model, DataTypes, Sequelize } = require('sequelize');

const EMPLOYES_TABLE = 'employes';

const EmployesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  city: {
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
  infonavit: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  fonacot: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  id_contractor: {
    allowNull: false,
    type: DataTypes.NUMBER,
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

class Employes extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLOYES_TABLE,
      modelName: 'Employes',
      timestamps: false
    }
  }
}


module.exports = { EMPLOYES_TABLE, EmployesSchema, Employes }
