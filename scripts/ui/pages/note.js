var fastn = require('^fastn'),
    app = require('^app');
        
module.exports = function( activityModel ){
    return fastn('div', {class: 'notePage'}, 
        // fastn('div',{class: 'noteTitle'}, fastn.binding('currentNote.title') ),
        
        // fastn('div',{class: 'noteSource'}, fastn.binding('currentNote.source') ),
        // fastn('div',{class: 'noteDate'}, fastn.binding('currentNote.date',function(dateStr){
        //     var date = new Date(dateStr)
        //     var d = date.getDay();
        //     var m = month[date.getMonth()];
        //     var y = date.getFullYear();
        //     return 'Published on ' + d + ' ' + m + ' ' + y;
        // }) ),
        
        fastn('div',{class: 'noteTitle'}, 'TODO - 25 Jan \'16 ')
        // fastn('div',{class: 'noteFullText'}, fastn.binding('currentNote.fullText') )
        
        // fastn('list', {
        //     class: 'homeDetails',
        //     items: fastn.binding('currentNote|*'),
        //     template: function(model){
        //         console.log( model );
        //         console.log( fastn.binding('currentNote'));
        //        return fastn('div', {class: 'homeDetailsItem'},
        //                     'Key ', fastn.binding('key'), ', vlue: ', fastn.binding('key') 
        //                 )
                    
        //     }
        // })
    ).attach(app.models.data.model);
}


var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
