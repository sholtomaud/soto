var fastn = require('^fastn'),
    app = require('^app'),
    simpleDate = require('simple-date'),
    titleTrigger = 0;


module.exports = function( activityModel ){
    return fastn('div', {class: 'editPage'}, 
            fastn('div',{class:'editTitle'}, fastn.binding('.',function(){
                    var currentDate = new Date();
                    return 'note to file - '+ simpleDate.format(currentDate, 'dmy');
                } )),
            fastn('div', {class: 'editItems'}, 
                fastn('div',{class: 'appInfo'},
                    fastn('textarea',
                        {
                            class:'editInput'
                        })
                ).on('keypress',function(event, scope){
                    
                    //Actually here is the logic ...
                    /// If the values of the textarea starts with '#' then change the style and set the section title in model
                    // It is the containing div? 
                    // So I can drag and drop to other divs?
                    // Create a new text area. 
                    // 
                    

                    var keycode =  event.keyCode;
                    switch ( keycode ){
                        case 13:
                            console.log('hooray')
                            break;
                        case 35:
                            titleTrigger = 1;
                            console.log('trigger val', titleTrigger)
                            break;
                        case 32:
                            titleTrigger = 0;
                            break;
                        default:
                            ( titleTrigger ) ? console.log('Need to assign class & format') : '';
                            console.log('key', keycode)
                    }
                })
            )
        ).attach(app.models.stats.model);
}

