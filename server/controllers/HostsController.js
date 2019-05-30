const hostile = require('hostile')
const pify = require('pify');
const fs = require('fs');
const setHost = pify(hostile.set);
const removeHost = pify(hostile.remove);
const listHosts = pify(hostile.get);

function returnError(ctx, err, optional){
    const {code, msg} = Object.assign({
        msg: err,
        code: 500
    }, optional);
    const e = new Error(err);
    console.log(e);
    ctx.body = {
        code,
        msg,
        error: e.toString()
    }
}

function returnSuccess(ctx, optional){
    const {code, msg, data} = Object.assign({
        code: 0,
        msg: 'ok',
        data: null
    }, optional);
    ctx.body = {
        code,
        msg,
        data
    }
}

function cors(ctx){
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', '*')
}


class HostsController{
    
    static list(ctx){
        cors(ctx);
        this._setHostsPath(ctx);
        return listHosts(false).then((lines)=>returnSuccess(ctx, {data: lines})).catch(err => {
            returnError(ctx, err);
        })
    }

    static set(ctx){
        return this._wrapper(ctx, setHost);
    }

    static remove(ctx){
        return this._wrapper(ctx, removeHost);
    }

    static _wrapper(ctx, action){
        cors(ctx);
        if(!this.valid(ctx)) return;
        this._setHostsPath(ctx);
        const {ip, host} = ctx.query;
        return action(ip, host).then(()=>returnSuccess(ctx)).catch(err => {
            returnError(ctx, err);
        })
    }

    static _setHostsPath(ctx){
        const {hostsPath} = ctx.query;
        if(hostsPath){
            hostile.HOSTS = hostsPath;
        }
    }

    static setHostsPath(ctx){
        const {hostsPath} = ctx.query;
        if(!hostsPath || !fs.existsSync(hostsPath)){
            return returnError(ctx, 'invalid hosts path')
        }
        hostile.HOSTS = hostsPath;
        returnSuccess(ctx);
    }

    static valid(ctx){
        const {ip, host} = ctx.query;
        if(!this.validIp(ip)){
            returnError(ctx, 'invalid ip');
            return false;
        }
        if(!this.validHost(host)){
            returnError(ctx, 'invalid host');
            return false;
        }
        return true;
    }

    static validIp(ip){
        console.log(ip)
        return ip && ip.match && ip.match(/(?:(?:(?:[0-9]|[0-2][0-9])|(?:[01][0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5]))\.){3}(?:(?:[0-9]|[0-2][0-9])|(?:[01][0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5]))/)
    }

    static validHost(host){
        return host && host.match && host.match(/^.+$/);
    }
}

module.exports = HostsController;