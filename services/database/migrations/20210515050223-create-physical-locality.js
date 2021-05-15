module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PhysicalLocalities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      x: {
        type: Sequelize.FLOAT,
      },
      y: {
        type: Sequelize.FLOAT,
      },
      dx: {
        type: Sequelize.FLOAT,
      },
      dy: {
        type: Sequelize.FLOAT,
      },
      ddx: {
        type: Sequelize.FLOAT,
      },
      ddy: {
        type: Sequelize.FLOAT,
      },
      radius: {
        type: Sequelize.FLOAT,
      },
      mass: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PhysicalLocalities')
  },
}
