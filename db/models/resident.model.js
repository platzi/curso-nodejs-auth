const { Model, DataTypes, Sequelize } = require('sequelize');

const RESIDENT_TABLE = 'resident';

const ResidentSchema = {
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
  id_business: {
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

class Resident extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: RESIDENT_TABLE,
      modelName: 'Resident',
      timestamps: false
    }
  }
}


module.exports = { RESIDENT_TABLE, ResidentSchema, Resident }
