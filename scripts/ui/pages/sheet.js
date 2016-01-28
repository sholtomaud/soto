var fastn = require('^fastn'),
    app = require('^app'),
    simpleDate = require('simple-date'),
    titlecase = require('titlecase'),
    jsPDF = require('jspdf-browserify');

module.exports = function( activityModel ){
    // console.log('activityModel data', activityModel);
    // console.log('activityModel data', fastn.binding('item.values.dataSource').attach(activityModel)() );
    var dataSource = fastn.binding('item.values.dataSource').attach(activityModel)();
    return fastn('div', {class: 'resumePage'}, 
        fastn('div',{class: 'noteTitle'}, 'demo d&d jsonresume' ),
        fastn('div',{class: 'noteTitle'}, 'Drag a valid JSONResume file onto the page and render your resume.' ),
        fastn('list', {
            class: 'resumeDetails',
            items: fastn.binding('data.'+dataSource+'|*'),
            template: function(model){
               return fastn('div', {class: 'resumeSection'}, 
                    fastn('div',{class: 'resumeSectionTitle'}, fastn.binding('key')
                    ),
                    fastn('list', {
                        class: 'resumeSectionList',
                        items: fastn.binding('item|*'),
                        template: function(model){
                            return fastn('div',{class: 'resumeSection'}, 
                                fastn.binding('.', function(sectionItem){
                                    return ( sectionItem.item  && typeof sectionItem.item === 'string'  ) ? sectionItem.key + ':  ' + sectionItem.item : '';
                                }), 
                                fastn('list', {
                                    items: fastn.binding('item|*'),
                                    template: function(model){
                                        return fastn('div',{class: 'resumeItem'}, 
                                                fastn('div',{class: 'resumeItemLabel'}, 
                                                    fastn.binding('.',function(dat){
                                                        var itemKey = titlecase(dat.key.toString()) ;
                                                        var item = ( dat.key.toString().match(/date/gi) ) ? simpleDate.format(new Date(dat.item),'dmy') : dat.item;
                                                        var row = itemKey  + ':  ' + item 
                                                    return row;
                                                })

                                            ) 
                                        ); 
                                    }
                                })
                            );
                        
                        }
                    })
                );
            }
        }),
        require('../controls/download.js')()
    )
    .on('dragenter', function(event){ 
        event.preventDefault();
    })
    .on('dragover',  function(event){ 
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    })
    .on('drop', function(event) {
        event.preventDefault();
        event.target.style.border = null;

        var file = event.dataTransfer.files[0]; 
        if (!file.type.match('application/json')) {
            alert('Not a JSON file!');
        }
        
        var reader = new FileReader();
        reader.onloadend = function( ) {
            
            var data = JSON.parse(this.result);
            // validateSchema(data, jsonResumeSchema, function(error){
            //     if(error){
            //         console.log('jsonRes error', error);
            //         return;
            //     }
                // var dataTarget = 'data.' + dndjsonresume;
                app.models.data.model.set('data.' + dataSource, data);
            // });
            
        };

        reader.readAsText(event.dataTransfer.files[0]);    
  
    })
    .attach(app.models.data.model);
}
