var config = require('^config'),
    cpjax = require('cpjax');

function login(route, loginId, callback){
    cpjax({
        url: config.url + '/'+ route,
        dataType: 'json',
        method: 'POST',
        data: loginId
    }, callback);
}

function create(route, userId, callback){
    cpjax({
        url: config.url + '/'+ route,
        dataType: 'json',
        method: 'POST',
        data: userId
    }, callback);
}

module.exports = {
    login: login,
    create: create
};