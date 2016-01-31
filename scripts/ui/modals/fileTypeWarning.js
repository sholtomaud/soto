var fastn = require('^fastn'),
    app = require('^app');
    
var main = fastn('modal', {class: 'mainMenu'},
    'Not a json file type'   
);

main.render();

document.body.appendChild(main.element);
        
module.exports = main;