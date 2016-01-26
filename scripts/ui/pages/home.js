var fastn = require('^fastn'),
    app = require('^app')   ;
        
module.exports = function( activityModel ){
    return fastn('div', {class: 'homePage'},
        fastn('list', {
            class: 'homeDetails',
            items: fastn.binding('notes|*'),
            template: function(model){
               return fastn('div', {class: 'homeDetailsItem'},
                        // fastn('div',{class: 'homeDetailItemTitle'}, fastn.binding('item.title') ),
                        fastn('div',{class: 'homeDetailItemTitleLine'}, 
                            fastn('div',{class: 'homeDetailItemSource'}, 
                                fastn('i', {class: fastn.binding('item.mdi',function(mdi){
                                        return 'mdi mdi-' + mdi;
                                    }) 
                                })
                                // , 
                                // fastn.binding('item.source') 
                            ),
                            fastn('div',{class: 'homeDetailItemTitle'}, fastn.binding('item.title') )
                        ),
                        fastn('div',{class: 'homeDetailItemDate'}, fastn.binding('item.date',function(dateStr){
                            var date = new Date(dateStr)
                            var d = date.getDay();
                            var m = month[date.getMonth()];
                            var y = date.getFullYear();
                            return 'Published on ' + d + ' ' + m + ' ' + y;
                        }) ),
                        fastn('div',{class: 'homeDetailItemSnippit'}, fastn.binding('item.snippit') )
                    ).on('click',function(event, scope){
                        event.preventDefault();
                        // app.loader.show(true);
                        app.activityRouter.top('note', { _id : scope.get('item._id') });
                        // app.controls.getNTF(scope.get('item._id'), function(){
                        //     app.loader.show(false);
                            
                        // });
                    })
            }
        })
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
