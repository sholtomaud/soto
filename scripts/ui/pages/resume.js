var fastn = require('^fastn'),
    app = require('^app'),
    simpleDate = require('simple-date'),
    titlecase = require('titlecase');
var jsPDF = require('jspdf-browserify');

var date = new Date();
var cvFile = 'CV_SholtoMaud_' +  date.getFullYear();
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
                        class: 'resumeSectionList',
                        items: fastn.binding('item|*'),
                        template: function(model){
                            var g = fastn.binding('key');
                            console.log('section model', g );

                            return fastn('div',{class: 'resumeSectionItems'}, 
                                fastn('list', {
                                    items: fastn.binding('item|*'),
                                    template: function(model){
                                        // console.log('model',model);
                                        return fastn('div',{class: 'resumeItem'}, 
                                                fastn('div',{class: 'resumeItemLabel'}, 
                                                    fastn.binding('.',function(dat){
                                                        var itemKey = titlecase(dat.key.toString()) ;
                                                        // console.log('dat',dat.key.toString() ); 
                                                        var item = ( dat.key.toString().match(/date/gi) ) ? simpleDate.format(new Date(dat.item),'dmy') : dat.item;
                                                        var row = fastn('div',{class: 'resumeItemLabel'}, itemKey ) + ':  ' + item 
                                                    return row;
                                                })

                                            ) 
                                        ); 
                                    }
                                })
                            );
                                // fastn.binding('item'),':',fastn.binding('value') );
                        }
                    })
                );
            }
        }),
        // require('../controls/download')
        fastn('div',{ 'class' : 'downloadButtons' }, 
            fastn('div', { 
                'class' : 'downloadPDF'
            }, 
                fastn('i', {'class': 'mdi mdi-file-pdf' } ) )
                .on('click', function(event, scope){
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    // JSON.stringify( scope.get('jsonresume')
                    
                    cvFile = cvFile + '.pdf'
                    var pdf = new jsPDF();
                    pdf.text('Definitely A WORK IN PROGRESS ', 20, 20 )
                        .text(['hi','ho'],30, 30 )
                        .save(cvFile);
            }),
            fastn('a', { 
                'class' : 'downloadJSON',
                'href' : fastn.binding('jsonresume', function( resume ){
                    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume));
                    return 'data:' + data;
                }),
                'download' : cvFile + '.json'
            }, 'json')
        )    
    ).attach(app.models.data.model);
}


