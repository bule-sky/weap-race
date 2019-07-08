'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.ctx);
    this.ctx.body = 'post';
  }

  async login() {
    let {ctx} = this
  	let {code} = ctx.query
    let {appid, secret} = ctx.app.config.wechat_config

    const res =  await ctx.service.weixin.getOpenId(appid, secret,code);
    
    const result =  await ctx.service.weixin.getAccessToken(appid, secret);
    console.log(result)

    // {openid,session_key}
  	
    // ctx.query()
    // ctx.body = post;
    ctx.body = {
    	code: 0,
    	data: res
    };
  }

  async insert() {
    const {ctx} = this;
    let params = ctx.request.body
    let result = {}
    const _res = await ctx.service.user.getByOpenId(params)
    console.log(params.openId)
    console.log(_res.openId)
    // console.log(_res.openId === params.openId)
    if ( _res.openId == params.openId) {
      Object.assign(result, {msg: 'openId为空，请重新登录！！'})
      return
    } else {
      // const res = await ctx.service.user.createByItem(params);
      Object.assign(result, {msg: '添加成功，正在跳转中，请勿刷新页面！！！'})
    }
    console.log(result)
    ctx.body = {
      code: 0,
      data: result
    };
  }  

}

module.exports = HomeController;
