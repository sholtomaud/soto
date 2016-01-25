var fastn = require('^fastn'),
    app = require('^app');
    
var main = fastn('modal', {class: 'mainMenu'},
    fastn('div',{class:'cross'},
        // fastn('div',{class:'menuTitle'}, fastn.binding('main.label')),
        fastn('i', {'class': 'mdi mdi-close'}) )
        .on('click',function(event, scope){
            event.preventDefault();
            main.show(false);
        }),
    fastn('list',{
        class: 'main-items', 
        items: fastn.binding('main.controls|*'),
        template: function(model){
            return  fastn('div',{class:'main-item'},
                    fastn('i', {'class': fastn.binding('item.mdi',function(icon){
                                return 'mdi mdi-' + icon; 
                            })
                        }),
                    fastn('div',{class:'menu-label'},fastn.binding('item.label'))
                )
                .on('click', function(event, scope) {
                    app.activityRouter.top(scope.get('item.target'));
                    main.show(false);// require('../menus').main.show(true);
                });
            }
        }    
    )
).attach(app.models.menus.model);

main.render();

document.body.appendChild(main.element);
        
module.exports = main;