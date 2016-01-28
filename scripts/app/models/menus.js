var fastn = require('^fastn'),
    menusModel = new fastn.Model({
        "showCurrent": false,
        "main": {
            "type":"menu",
            "applicationId":"_myAppID",
            "companies":{ "companyId" :"_myCompanyID"},
            "element":"modal",
            "class":"",
            "mdi":"menu",
            "name":"mainMenu",
            "label":"Main menu",
            "tooltip":"",
            "userAccessLevel":"0",
            "controls":[
                {
                    "_id": "56937866d4f28a0e49df0bc6",
                    "action": "open",
                    "class": "bookOpenVariant",
                    "mdi": "file-outline",
                    "element": "i",
                    "enabled": true,
                    "name": "resume",
                    "label": "my resume",
                    "target": "resume",
                    "tooltip": "",
                    "type": "control",
                    "userAccessLevel": 0
                },{
                    "_id": "56937866d4f28a0e49df0bc6",
                    "action": "open",
                    "class": "bookOpenVariant",
                    "mdi": "file-outline",
                    "element": "i",
                    "enabled": true,
                    "name": "sheet",
                    "label": "demo d&d jsonresume",
                    "target": "sheet",
                    "dataSource":"dndjsonresume",
                    "tooltip": "",
                    "type": "control",
                    "userAccessLevel": 0
                },{
                    "_id": "56937866d4f28a0e49df0bc6",
                    "action": "show",
                    "class": "bookOpenVariant",
                    "mdi": "language-javascript",
                    "element": "i",
                    "enabled": true,
                    "name": "about",
                    "label": "About the App",
                    "target": "info",
                    "tooltip": "",
                    "type": "control",
                    "userAccessLevel": 0
                }
            ]
        }
    });

// {
//                     "_id": "56937866d4f28a0e49df0bc6",
//                     "action": "open",
//                     "class": "bookOpenVariant",
//                     "mdi": "pen",
//                     "element": "i",
//                     "enabled": true,
//                     "name": "notes",
//                     "label": "Diary Notes",
//                     "target": "note",
//                     "tooltip": "",
//                     "type": "control",
//                     "userAccessLevel": 0
//                 },{
//                     "_id": "56937866d4f28a0e49df0bc6",
//                     "action": "open",
//                     "class": "history",
//                     "mdi": "history",
//                     "element": "i",
//                     "enabled": true,
//                     "name": "history",
//                     "label": "autobiography",
//                     "target": "history",
//                     "tooltip": "",
//                     "type": "control",
//                     "userAccessLevel": 0
//                 },


// {
//                     "_id": "56937866d4f28a0e49df0bc6",
//                     "action": "show",
//                     "class": "bookOpenVariant",
//                     "mdi": "pencil",
//                     "element": "i",
//                     "enabled": true,
//                     "name": "about",
//                     "label": "Editor",
//                     "target": "edit",
//                     "tooltip": "",
//                     "type": "control",
//                     "userAccessLevel": 0
//                 },

// {
//                     "_id": "56937866d4f28a0e49df0bc6",
//                     "action": "open",
//                     "class": "lightbulb-outline",
//                     "mdi": "lightbulb-outline",
//                     "element": "i",
//                     "enabled": true,
//                     "name": "thoughts",
//                     "label": "Thinking aloud",
//                     "target": "thoughts",
//                     "tooltip": "",
//                     "type": "control",
//                     "userAccessLevel": 0
//                 },

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

