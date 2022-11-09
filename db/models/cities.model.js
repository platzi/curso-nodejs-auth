const { Model, DataTypes, Sequelize } = require('sequelize');

const CITIES_TABLE = 'cities';

const CitiesSchema = {
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

class Cities extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CITIES_TABLE,
      modelName: 'Cities',
      timestamps: false
    }
  }
}


module.exports = { CITIES_TABLE, CitiesSchema, Cities }
