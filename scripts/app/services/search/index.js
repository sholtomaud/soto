var config = require('../../../config'),
    db = require('../../persistence')[config.persistence];
    debounce = require('debounce');

function searchSite( token, data, callback){
    db.Record.search( token, 'search', data, function (error, data){
        if (error){
            console.log(error)
        }
        callback(null, data);
    })
}

module.exports = {
    site: debounce( searchSite, 400 )
}