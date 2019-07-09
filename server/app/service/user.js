const Service = require('egg').Service;

class UserService extends Service {
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
          const list = await ctx.model.User.findAll({
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
        const list = await ctx.model.User.findOne({
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
        const list = await ctx.model.User.create({
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
        const response = await ctx.model.User.update({
            ...request
        }, {
            where: { id: request.id },
        });
        return response
    } catch (e) {
      throw new Error(e)
    }
  }

  async getByOpenId(params) {
    const {ctx} = this;
    try {
        if (!params.openId) {
          return {
            code: true,
            msg: 'openId为空，请重新登录！！'
          };
        }
        const list = await ctx.model.User.findOne({
          where: {
            openId: params.openId
          }
        });
        return list;
    } catch (e) {
        throw new Error(e)
    }
  }

}

module.exports = UserService;