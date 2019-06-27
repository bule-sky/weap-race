const Service = require('egg').Service;

class QuestionService extends Service {
  // 查询
  async getByItem(params) {
      const {ctx} = this;
      try {
          if (!params.id) {
            return {
              code: true,
              msg: '暂无数据，请添加！！'
            };
          }
          const list = await ctx.model.Question.findAll({
            limit:Number(params.id),
          });
          return list;
      } catch (e) {
          throw new Error(e)
      }
  }

  async getByOne(params) {
    const {ctx} = this;
    try {
        if (!params.id) {
          return {
            code: true,
            msg: '查询id为空，请输入！！'
          };
        }
        const list = await ctx.model.Question.findOne({
          where: {
              id: params.id
          }
        });
        return list;
    } catch (e) {
        throw new Error(e)
    }
  }

  // 增
  async createByItem(request) {
    const {ctx} = this;
    try {
        if (!Object.keys(request).length) {
          return {
            code: true,
            msg: '请填写关键数据！！'
          };
        }
        const list = await ctx.model.Question.create({
          ...request
        });
        return list;
    } catch (e) {
        throw new Error(e)
    }
  }

  // 改
  async updateByItem(request) {
    const {ctx} = this;
    try {
        const response = await ctx.model.Question.update({
            ...request
        }, {
            where: { id: request.id },
        });
        return response
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = QuestionService;