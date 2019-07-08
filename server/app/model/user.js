module.exports = app => {
  const { STRING, INTEGER, TINYINT } = app.Sequelize;

  const User = app.model.define('sys_users', {
    id: {
      type: INTEGER(11),
      primaryKey: true,            // 主键
      autoIncrement: true,         // 自动递增
    },
    gender: {
      field: 'sex',
      type: TINYINT(2),
      allowNull: false
    },
    avatarUrl: {
      field: 'avatar',
      type: STRING(240)
    },
    nickName: STRING(240),
    country: STRING(240),
    openId: STRING(240),
    province: STRING(240),
    city: STRING(240),
    mobile: STRING(240),
  },{
    underscored: false,
    createdAt: false,
    updatedAt: false,
  });

  return User;
};