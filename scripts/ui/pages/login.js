var fastn = require('^fastn'),
    app = require('^app');
    
module.exports = function( activityModel ){
    return fastn('div', {class: 'loginPage'}, 
            fastn('div',{class:'infoTitle'}, 'login'),
            fastn('div',{class: 'loginInfo'},
                fastn('div',{class:'infoSectionTitle'}, 'Username:'), 
                fastn('input',
                    {
                        class:'loginInput'
                    }),
                fastn('div',{class:'infoSectionTitle'}, 'Password:'), 
                fastn('input',
                    {
                        class:'loginInput'
                    })
            )
        ).attach(app.models.stats.model);
}