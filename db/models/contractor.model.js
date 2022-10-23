const { Model, DataTypes, Sequelize } = require('sequelize');

const CONTRACTOR_TABLE = 'contractor';

const ContractorSchema = {
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
  rfc: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  id_user: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  id_business: {
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

class Contractor extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTRACTOR_TABLE,
      modelName: 'Contractor',
      timestamps: false
    }
  }
}


module.exports = { CONTRACTOR_TABLE, ContractorSchema, Contractor }
