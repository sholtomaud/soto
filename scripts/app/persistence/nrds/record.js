var config = require('^config'),
    cpjax = require('cpjax');

function get( route, id, callback){
    cpjax({
        url: config.url + '/'+ route +'/' + id,
        dataType: 'json',
        headers:{
            authorization: token
        }
    }, callback);
}

function search(token, route, data, callback){
    cpjax({
        url: config.url + '/' + route,
        dataType: 'json',
        method: 'POST',
        data: data,
        headers:{
            authorization: token
        }
    }, callback);
}

function update(token, route, id, data, callback){
     cpjax({
        url: config.url + '/'+ route +'/' + id,
        method: 'PUT',
        dataType: 'json',
        data: data,
        headers:{
            authorization: token
        }
    }, callback);
}

function create(token, route, data, callback){
    cpjax({
        url: config.url + '/' + route,
        method: 'POST',
        dataType: 'json',
        data: data,
        headers:{
            authorization: token
        }
    }, callback);
}

function remove(token, route, id, callback){
    cpjax({
        url: config.url + '/' + route + '/' + id,
        method: 'PUT',
        dataType: 'json',
        headers:{
            authorization: token
        }
    }, callback);
}

module.exports = {
    get: get,
    search: search,
    update: update,
    create: create,
    remove: remove
};