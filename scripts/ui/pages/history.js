var fastn = require('^fastn'),
    app = require('^app');
    // ,
    // resumeSchema  = require('resume-schema');
    
    // console.log('resumeSchema', resumeSchema);    

module.exports = function( activityModel ){
    return fastn('div', {class: 'infoPage'}, 
        fastn('list', {
            class: 'homeDetails',
            items: fastn.binding('autobiography|*'),
            template: function(model){
                var itme = fastn.binding('key')();
                console.log('itme',itme ); 
                return fastn('div', {class: 'homeDetailsItem'}, 
                    fastn.binding('key'), fastn.binding('item.title')
                )
            }
        })
        // fastn('div',{class: 'noteTitle'}, fastn.binding('currentData.title') ),
        // fastn('div',{class: 'noteSource'}, fastn.binding('currentData.source') ),
        // fastn('div',{class: 'noteDate'}, fastn.binding('currentData.date',function(dateStr){
        //     var date = new Date(dateStr)
        //     var d = date.getDay();
        //     var m = month[date.getMonth()];
        //     var y = date.getFullYear();
        //     return 'Published on ' + d + ' ' + m + ' ' + y;
        // }) ),
        // fastn('div',{class: 'noteFullText'}, fastn.binding('currentData.fullText') )
    ).attach(app.models.data.model);
}
