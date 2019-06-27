module.exports = (options,app) => {
    return async function forbidip(ctx,next){
        var forbidips = options.forbidips;
        var clientIp = ctx.request.ip;
        var hasIp = forbidips.some(val => {
            if(val == clientIp){
                return true;
            }
        })
        if(hasIp){
            ctx.status = 403;
            ctx.body = '你的ip已经被屏蔽';
        }else{
            await next()
        }
    }
}