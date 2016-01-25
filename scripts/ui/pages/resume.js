var fastn = require('^fastn'),
    app = require('^app'),
    simpleDate = require('simple-date'),
    titlecase = require('titlecase');
    // ,
    // resumeSchema  = require('resume-schema');
    
    // console.log('resumeSchema', resumeSchema);    

module.exports = function( activityModel ){
    
    return fastn('div', {class: 'resumePage'}, 
        fastn('div',{class: 'noteTitle'}, 'resume' ),
        fastn('list', {
            class: 'resumeDetails',
            items: fastn.binding('jsonresume|*'),
            template: function(model){
               return fastn('div', {class: 'resumeSection'}, 
                    fastn('div',{class: 'resumeSectionTitle'}, fastn.binding('key')),
                    fastn('list', {
                        items: fastn.binding('item|*'),
                        template: function(){
                            return fastn('div',{class: 'resumeSectionItems'}, 
                                fastn('list', {
                                    items: fastn.binding('item|*'),
                                    template: function(){
                                        return fastn('div',{class: 'resumeItem'}, fastn.binding('.',function(dat){
                                            
                                            var item = ( dat.key.toString().match(/date/gi) ) ? simpleDate.format(new Date(dat.item),'dmy') : dat.item;
                                            return titlecase(dat.key.toString()) + ': ' + item ;
                                        }) ); 
                                        
                                    }
                                })
                            );
                                // fastn.binding('item'),':',fastn.binding('value') );
                        }
                    })
                );
            }
        })
    ).attach(app.models.data.model);
}

// jsonresume":{
//           "basics": {
//             "name": "Sholto Maud",
//             "label": "Programmer",
//             "picture": "",
//             "email": "sholto.maud@gmail.com",
//             "phone": "+61 (0) 424 094 227",
//             "url": "http://shotlom.github.io",
//             "location": {
//               "address": "Unit 9A 1a St Johns College",
//               "postalCode": "4067",
//               "city": "St Lucia",
//               "countryCode": "AUS",
//               "region": "Queensland"
//             },
//             "profiles": [{
//               "network": "Twitter",
//               "username": "sholtomaud",
//               "url": "http://twitter.com/sholtomaud"
//             },{
//               "network": "LinkedIn",
//               "username": "Sholto Maud",
//               "url": "https://www.linkedin.com/in/sholtomaud"
//             }]
//           },


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


