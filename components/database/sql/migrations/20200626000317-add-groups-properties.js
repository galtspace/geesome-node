'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const groupsTable = await queryInterface.describeTable('groups');

    if(groupsTable['propertiesJson']) {
      return;
    }

    return Promise.all([
      queryInterface.addColumn('groups', 'propertiesJson', {
        type: Sequelize.TEXT
      }).catch(() => {})
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('groups', 'propertiesJson').catch(() => {}),
    ]);
  }
};
