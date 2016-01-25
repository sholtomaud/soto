var db = require('../../persistence').nrds;

function login( accountData, callback){
    db.Account.login( 'login', accountData, function (error, data){
        if (error){
            return callback(error);
        }
        return callback(null, data);
    })
}

function createUser( userData, callback){
    db.Account.create( 'accounts', userData, function (error, data){
        console.log('createUser', userData, 'data return', data);
        if (error){
            return callback(error);
        }
        return callback(null, data);
    })
}

module.exports = {
    login: login,
    createUser: createUser 
}