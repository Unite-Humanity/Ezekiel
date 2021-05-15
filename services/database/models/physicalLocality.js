const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class PhysicalLocality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ PhysicalLocality }) {
      // define association here
      PhysicalLocality.hasMany(PhysicalLocality, { foreignKey: 'parentId' })
      PhysicalLocality.belongsTo(PhysicalLocality, { foreignKey: 'parentId' })
    }
  }
  PhysicalLocality.init({
    x: DataTypes.FLOAT,
    y: DataTypes.FLOAT,
    dx: DataTypes.FLOAT,
    dy: DataTypes.FLOAT,
    ddx: DataTypes.FLOAT,
    ddy: DataTypes.FLOAT,
    radius: DataTypes.FLOAT,
    mass: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'PhysicalLocality',
  })

  return PhysicalLocality
}
