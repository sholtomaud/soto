var fastn = require('^fastn'),
    app = require('^app');
    
var main = fastn('modal', {class: 'mainMenu'},
    fastn('div',{class:'cross'},
        // fastn('div',{class:'menuTitle'}, fastn.binding('main.label')),
        fastn('i', {'class': 'mdi mdi-close'}) 
    )
    .on('click',function(event, scope){
        event.preventDefault();
        main.show(false);
    }),
    fastn('div',{class:'menu-label'}, 'download json css'),
    fastn('div',{class:'menu-label'},  'download sommit')
    // fastn('div',{class:'menu-label'},fastn.binding('item.label')),
).attach(app.models.menus.model);

main.render();

document.body.appendChild(main.element);
        
module.exports = main;