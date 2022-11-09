const { Model, DataTypes, Sequelize } = require('sequelize');

const BUSINESS_TABLE = 'business';

const BusinessSchema = {
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
  reg_patronal: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  rfc: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
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

class Business extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: BUSINESS_TABLE,
      modelName: 'Business',
      timestamps: false
    }
  }
}


module.exports = { BUSINESS_TABLE, BusinessSchema, Business }
