module.exports = app => {
  const { STRING, INTEGER, TINYINT } = app.Sequelize;

  const Question = app.model.define('sys_questions', {
    id: {
      type: INTEGER(11),
      primaryKey: true,            // 主键
      autoIncrement: true,         // 自动递增
    },
    ask: STRING(240),
    answer: TINYINT(2),
    solve: STRING(240),
  },{
    underscored: false,
    createdAt: false,
    updatedAt: false,
  });

  // Question.queryList = async function(limit) {
  //   return await this.findOne({
  //     where: {
  //       login: login
  //     }
  //   });
  // }

  // // don't use arraw function
  // Question.prototype.logSignin = async function() {
  //   return await this.update({ last_sign_in_at: new Date() });
  // }
  return Question;
};