'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('User_roles', {
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'restrict'
      },
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model: 'Roles',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User_roles');
  }
};
