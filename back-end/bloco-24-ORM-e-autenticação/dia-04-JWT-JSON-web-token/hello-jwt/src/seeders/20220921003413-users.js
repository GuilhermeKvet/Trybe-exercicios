module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        username: 'Guilherme Kvet',
        password: 'curioso',
      },
      {
        id: 2,
        username: 'Edoarda',
        password: 'curiosa',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};