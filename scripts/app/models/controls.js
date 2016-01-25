var fastn = require('^fastn'),
    controlsModel = new fastn.Model({
        login: {
            "23049823": {
                "_id": "23049823",
                "element":"i",
                "class": "mdi mdi-menu",
                "action": "login",
                "targetType": null,
                "enabled": true
            },
            "23049825": {
                "_id": "23049825",
                "element":"button",
                "class": "login",
                "loader": true,
                "action": "newUser",
                "enabled": true
            },
            "23049824":{
                "_id": "23049824",
                "element":"i",
                "class": "mdi mdi-edit",
                "name": "menu",
                "tooltip": "Edit",
                "action": "show",
                "targetId": "5453434545345345345345",
                "enabled": true
            },
            "23049826":{ 
                "_id": "23049826",
                "applicationId": "5691b43ad4f28a0e49df0bab",
                "class": "mdi mdi-menu",
                "element": "div",
                "enabled": true,
                "name": "mdi mdi-menu",
                "type": "control",
                "targetId":"569378e4d4f28a0e49df0bcc",
                "targetType": "menus",
                "action": "toggle",
                "userAccessLevel": 0
            }
        },
        app: {}  
    }),
    Controls = require('../services').controls;

controlsModel.on('.|*', function (data){
  // console.log('controlsModel data: ',data);
})

function set( id ){
    Controls.get( id, function ( controls ){
        // controlsModel.set( controls );
    })
}

function get( id , callback ){
    var control = controlsModel.get( 'login.' + id );
    return callback( null, control );
}

function setAppControls( controls , callback ){
    controlsModel.set( 'app', controls );
    return callback( null, null );
}

//page controls
//bar controls 
//

module.exports = {
  model: controlsModel,
  set: set, 
  get: get
};
