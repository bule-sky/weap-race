'use strict';
const Controller = require('egg').Controller;

class QuestionController extends Controller {
  async index() {
    this.ctx.body = 'test index';
  }

  async insert() {
    const {ctx} = this;
    const res = await ctx.service.question.createByItem(ctx.request.body);
    console.log(res)
    ctx.body = {
      code: 0,
      data: ctx.request.body
    };
  }

  async update() {
    const {ctx} = this;
    const res = await ctx.service.question.updateByItem(ctx.request.body);
    console.log(res)
    ctx.body = {
      code: 0,
      data: ctx.request.body
    };
  }

  async getByList() {
    const {ctx} = this;
    const res =  await this.ctx.service.question.getByItem(ctx.params);
    console.log(res)
    ctx.body = {
      code: 0,
      data: res
    };
  }

}

module.exports = QuestionController;
