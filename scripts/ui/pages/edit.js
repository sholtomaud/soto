var fastn = require('^fastn'),
    app = require('^app');
    
module.exports = function( activityModel ){
    return fastn('div', {class: 'infoPage'}, 
            fastn('div',{class:'infoTitle'}, 'note to file - 25 Jan \'16 '),
            fastn('div',{class: 'appInfo'},
                fastn('div',{class:'infoSectionTitle'}, 'ABOUT THE APP:'), 
                fastn('textarea',
                    {
                        class:'editInput'
                    })
            )
        ).attach(app.models.stats.model);
}
