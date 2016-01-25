var config = require('../../../config'),
    db = require('../../persistence')[config.persistence];

// sessionData ,function(error, menus)

function get( sessionData, callback ){
    return callback(null, null); 

    // db.Record.get( token, 'menus', userLevel, function (error, menus){
    //     if (error){
    //         console.log('services menus get',error);
    //     }
    //     console.log('services menus get: ', menus);
    
    //     return callback(null, menus); 
    // })
}

module.exports = {
    get : get
}
