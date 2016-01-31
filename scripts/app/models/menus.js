var fastn = require('^fastn'),
    menusModel = new fastn.Model({
        "showCurrent": false,
        "main": require('./menusList')
    });

menusModel.on('.|*', function (data){
    console.log('menusModel data: ',data);
})

function set( id ){
    var visible = id + '.visible';
    // Controls.get( id, function ( controls ){
        menusModel.set(visible, 'true' );
    // })
}

function setCurrentMenu( id ){
    var menu = menusModel.get( 'menus.' +id );
    menusModel.set( 'current', menu );
}


function get( id , callback ){
    var control = menusModel.get( id );
    return callback( null, control );
}


module.exports = {
    model: menusModel,
    set: set, 
    setCurrentMenu: setCurrentMenu,
    get: get,
    show: fastn.binding('current.show').attach(menusModel)
};

