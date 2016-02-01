var fastn = require('^fastn'),
    app = require('^app'),
    simpleDate = require('simple-date'),
    titlecase = require('titlecase'),
    jsPDF = require('jspdf-browserify');
    




// console.log('defaultStyle',defaultStyle);

module.exports = function( activityModel ){
    // console.log('activityModel data', activityModel);
    // console.log('activityModel data', fastn.binding('item.values.dataSource').attach(activityModel)() );
    var dataSource = fastn.binding('item.values.dataSource').attach(activityModel)();
    return fastn('div', {class: 'pageHolder'}, 
        require('../controls/download.js')(),
        fastn('div',{class: 'sheet'}, 
            fastn('div',{class: 'noteTitle'}, 'Drag a valid JSONResume file onto the page and render your resume.' ),
            fastn('list', {
                // class: 'resumeDetails',
                items: fastn.binding('data.'+dataSource+'|*'),
                template: function(model){
                   // sheet -  sheet handles 
                   // title - should there be md handing?
                   // 
                   // return fastn('div', { 'style' : fastn.binding('stylesCurrentStyle', function(key){
                    // fastn('title')
                    // fastn('')
                     // 
                   // return fastn('div', { 'style' : fastn.binding('stylesCurrentStyle', function(key){
                    // fastn('title')
                    // fastn('')
                    // return fastn('div', { 'style' : fastn.binding('styles.current.' + fastn.binding('key') ) } 

                    //     )


                   // return fastn('div', { 'style' : fastn.binding('currentStyle.' + key ) + fastn.binding('key') 
                    // 
                    //
                    //

// , function(key){
//                                 console.log('default key: ', key, ', value: ', defaultStyle[key] );
//                                 return ( typeof customStyle != "undefined" && customStyle.hasOwnProperty( key ) )? 
//                                     customStyle[key]
//                                     :
//                                     defaultStyle[key] ;
//                                 }
//                             )


                   return fastn('div', { 
                            'style' : fastn.binding('key',function(key){
                                return app.models.data.currentStyle(key);
                            })
                        }, fastn.binding('key', function(key){
                                return app.models.data.currentStyleLabel(key);
                        }),
                        fastn('list', {
                            class: fastn.binding('styles.currentStyle.paragraph').attach(app.models.data.model),
                            items: fastn.binding('item|*'),
                            template: function(model){
                                return fastn('div',{  'style' : fastn.binding('styles.currentStyle.title').attach(app.models.data.model)  }, 
                                    fastn.binding('.', function(sectionItem){
                                        return ( sectionItem.item  && typeof sectionItem.item === 'string'  ) ? sectionItem.key + ':  ' + sectionItem.item : '';
                                    }), 
                                    fastn('list', {
                                        items: fastn.binding('item|*'),
                                        template: function(model){
                                            return fastn('div',{
                                                class: fastn.binding('styles.currentStyle.item').attach(app.models.data.model)
                                            }, 
                                                fastn.binding('key', function(key){
                                                        console.log('key',key);
                                                        return app.models.data.currentStyleLabel(key);
                                                }),
                                                ': ',
                                                fastn.binding('item')     
                                                // fastn('div',{class: 'resumeItemLabel'}, 
                                                //     fastn.binding('.',function(dat){
                                                //         var itemKey = titlecase(dat.key.toString()) ;
                                                //         var item = ( dat.key.toString().match(/date/gi) ) ? simpleDate.format(new Date(dat.item),'dmy') : dat.item;
                                                //         var row = itemKey  + ':  ' + item 
                                                //     return row;
                                                // })

                                                // ) 
                                            ); 
                                        }
                                    })
                                );
                            
                            }
                        })
                    );
                }
            })
        ).on('dragenter', function(event){ 
            event.preventDefault();
            event.target.classList.add('css3DragOver');    
        })
        .on('dragover',  function(event){ 
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
            event.target.classList.remove('css3DragOver');
        })
        .on('drop', function(event) {
            event.preventDefault();
            event.target.style.border = null;
            event.target.classList.remove('css3DragOver');
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
                    // app.models.data.model.set('resume', data);
                // });
                
            };

            reader.readAsText(event.dataTransfer.files[0]);    
      
        })
        .attach(app.models.data.model)
    ) .on('dragenter', function(event){ 
        event.preventDefault();
    })
    .on('dragover',  function(event){ 
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    })
    .on('drop', function(event) {
        event.preventDefault();
    })
}
