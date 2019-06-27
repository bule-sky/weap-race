'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TINYINT } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      nick_name:STRING(30),
      name: STRING(30),
      sex: TINYINT(2),
      country: STRING(30),
      province: STRING(30),
      city: STRING(30),
      avatar: STRING(30),
      mobile: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
