const Service = require('egg').Service;

class WeixinService extends Service {
  //根据code获取用户openid
  async getOpenId(appid, secret,code) { 
    let {ctx} = this
    const {data} = await ctx.curl('https://api.weixin.qq.com/sns/jscode2session', {
      method: 'get',
      dataType: 'json',
      data: {
        appid: appid,
        secret: secret,
        js_code: code,
        grant_type: 'authorization_code'
      }
    });
    return data;
  }

  //获取用户token 有效期2 个小时
  async getAccessToken(appid, secret) {
    const {data} = await this.ctx.curl(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`, { dataType: 'json' });
    return data;
  }
}

module.exports = WeixinService;