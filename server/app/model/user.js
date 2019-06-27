module.exports = app => {
  const { STRING, INTEGER, TINYINT } = app.Sequelize;

  const Question = app.model.define('sys_users', {
    id: {
      type: INTEGER(11),
      primaryKey: true,            // 主键
      autoIncrement: true,         // 自动递增
    },
    nickName: STRING(240),
    sex: TINYINT(2),
    country: STRING(240),
    province: STRING(240),
    city: STRING(240),
    avatar: STRING(240),
    mobile: STRING(240),
  },{
    underscored: false,
    createdAt: false,
    updatedAt: false,
  });

  return Question;
};