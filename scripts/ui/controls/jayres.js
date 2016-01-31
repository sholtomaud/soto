var fastn = require('^fastn'),
    app = require('^app'),
    simpleDate = require('simple-date');
    file = simpleDate.format(new Date(), 'dashed' );

module.exports = function( activityModel ){
    
    return  fastn('a', { 
                'class' : 'downloadJSON',
                'href' : fastn.binding('data.resume', function( resume ){
                    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume));
                    return 'data:' + data;
                }),
                'download' : file + '.json'
                },'JayRes'
            )
        // .on('click', function(){
        //            console.log('data jayres', )
        //             // downloaders.show(false);
        //         })
            .attach(app.models.data.model);
            
}