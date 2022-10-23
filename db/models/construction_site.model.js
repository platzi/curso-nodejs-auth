const { Model, DataTypes, Sequelize } = require('sequelize');

const CONSTRUCTION_SITE_TABLE = 'construction_site';

const ConstructionSiteSchema = {
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
  location: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  id_business: {
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

class ConstructionSite extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSTRUCTION_SITE_TABLE,
      modelName: 'ConstructionSite',
      timestamps: false
    }
  }
}


module.exports = { CONSTRUCTION_SITE_TABLE, ConstructionSiteSchema, ConstructionSite }
