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

}

module.exports = HomeController;
