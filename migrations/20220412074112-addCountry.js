'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    Promise.all([
        queryInterface.addColumn('AFLEET_ADMIN', 'country', {
        type: Sequelize.STRING,
        defaultValue: 'NA',
    }),
      queryInterface.addColumn('AFLEET_ADMIN', 'contact', {
          type: Sequelize.STRING,
          defaultValue: 'NA',
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
