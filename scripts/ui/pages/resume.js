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
            items: fastn.binding('data.resume|*'),
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
                                        // console.log('model',model);
                                        return fastn('div',{class: 'resumeItem'}, 
                                                fastn('div',{class: 'resumeItemLabel'}, 
                                                    fastn.binding('.',function(dat){
                                                        var itemKey = titlecase(dat.key.toString()) ;
                                                        // console.log('dat',dat.key.toString() ); 
                                                        var item = ( dat.key.toString().match(/date/gi) ) ? simpleDate.format(new Date(dat.item),'dmy') : dat.item;
                                                        var row = itemKey  + ':  ' + item 
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
        require('../controls/download')()
    //     fastn('div',{ 'class' : 'controls' }, 
    //         fastn('div', { 
    //             'class' : 'downloadPDF'
    //         }, 
    //             fastn('i', {'class': 'mdi mdi-file-pdf' } ) )
    //             .on('click', function(event, scope){
    //                 event.preventDefault();
    //                 event.stopImmediatePropagation();
    //                 var cvData = scope.get('data.jsonresume') ;
    //                 cvFile = cvFile + '.pdf'
    //                 var pdf = new jsPDF();

    //                 // var section = [];
    //                 var details = [];
    //                 for(section in cvData){
    //                     details.push(section);
    //                     // pdf.setFontSize(20);
    //                     // pdf.text(section, 20, 20 );
    //                     if ( cvData[section] !== null && typeof cvData[section] === 'object' ){
    //                         // var section = [];
    //                         for( item in cvData[section] ){
    //                             if ( cvData[section][item] !== null && typeof cvData[section][item] !== 'object' ){
    //                                 var line = item +': '+ cvData[section][item];
    //                                 details.push(line);
    //                             }
    //                             else if (cvData[section][item] !== null && typeof cvData[section][item] === 'object'){
    //                                 for( i in cvData[section][item] ){
    //                                     var l = i +': '+ cvData[section][item][i];
    //                                     details.push(l);       
    //                                 }
    //                             }
    //                         }
    //                         // pdf.setFontSize(14);
    //                         // pdf.text(section, 20, 20 );
    //                     }
    //                 }
    //                 // var arr = Object.keys(cvData).map(function(value, index) { 
    //                 //     console.log(cvData[value]);
                        
    //                 //     return value;
    //                 // });

    //                 // console.log(arr);
    //                 pdf.text(details, 20, 20 )
    //                 pdf.save(cvFile);

    //         }),
    //         fastn('a', { 
    //             'class' : 'downloadJSON',
    //             'href' : fastn.binding('data.jsonresume', function( resume ){
    //                 var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume));
    //                 return 'data:' + data;
    //             }),
    //             'download' : cvFile + '.json'
    //             },'JayRes'
    //         ).on('click', function(){
    //             downloaders.show(false);
    //         })
            

            
            

    //     )    
    )
    .on('dragenter', function(e){ 
        e.preventDefault();
        // e.stopPropagation();
        // console.log(e);
    })
    .on('dragover',  function(e){ 
        e.preventDefault();
        // e.target.style.border = "1px solid red";
         
        // // e.stopPropagation();
        // // console.log(e);
        // setTimeout(function(){ 
        //     e.target.style.border.fadeOut("slow"); 
        // }, 2000);

        e.dataTransfer.dropEffect = 'copy';
    })

    // .on('dragover', function(event) {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     event.dataTransfer.dropEffect = 'copy';

    // })
    .on('drop', function(event) {
        // e.stopPropagation();
        // e.preventDefault();
        
        // if (!f.type.match('application/json')) {
        //     alert('Not a JSON file!');
        // }
        event.preventDefault();
        
        // event.stopPropagation();

        
        var file = event.dataTransfer.files[0]; 
        
        if (!file.type.match('application/json')) {
            alert('Not a JSON file!');
        }
        event.target.style.border = null;
        
        var reader = new FileReader();
        reader.onloadend = function( ) {
            
            var data = JSON.parse(this.result);
            app.models.data.model.set('data.jsonresume',data) ;
        };

        reader.readAsText(event.dataTransfer.files[0]);    


            // 
        


        // reader.readAsText(event.dataTransfer.files[0]);    
        

        // var files = e.dataTransfer.files; // Array of all files
        
        // for (var i=0, file; file=files[i]; i++) {
        //     var reader = new FileReader();
        //     reader.onload = function(e2) { // finished reading file data.
        //         console.log('e2',e2);
        //         //
        //         // img.src= e2.target.result;
        //         
        //     }
        //     reader.readAsDataURL(file); // start reading the file data.
            
        // }   
    })
    .attach(app.models.data.model);
}













// var downloaders = fastn('modal',
//         {class: 'downloaderButtons'},
//         fastn('div', { 
//                 'class' : 'downloadPDF'
//             }, 
//                 fastn('i', {'class': 'mdi mdi-file-pdf' } ) )
//                 .on('click', function(event, scope){
//                     event.preventDefault();
//                     event.stopImmediatePropagation();
//                     // JSON.stringify( scope.get('jsonresume')
                    
//                     cvFile = cvFile + '.pdf'
//                     var pdf = new jsPDF();
//                     pdf.text('Definitely A WORK IN PROGRESS ', 20, 20 )
//                         .text(['hi','ho'],30, 30 )
//                         .save(cvFile);

//                     downloaders.show(false);    
//             }),
//             fastn('a', { 
//                 'class' : 'downloadJSON',
//                 'href' : fastn.binding('data.jsonresume', function( resume ){
//                     var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume));
//                     return 'data:' + data;
//                 }),
//                 'download' : cvFile + '.json'
//                 },'JayRes'
//                 // fastn('img',
//                 //     { 
//                 //         class: 'imgIcon',
//                 //         src: 'img/jsonresume.png',
//                 //         alt: 'JayRes'
//                 //     }
//                 // ) 

//             ).on('click', function(){
//                 downloaders.show(false);
//             })
            
 


//     );


// downloaders.render();

// document.body.appendChild(downloaders.element);
        
// var unlock = fastn('div', { 
//                 'class' : 'downloadPDF'
//             }, 
//                 fastn('i', {'class': fastn.binding('showUnlockIcon', function(show){ 
//                         return show ? 'mdi mdi-lock-open' : 'mdi mdi-lock';
//                     })
//                 }) 

                   
//             ).on('click', function(event, scope){
//                     event.preventDefault();
//                     event.stopImmediatePropagation();
                    
//                     scope.get('showUnlockIcon') ? app.models.data.model.set('showUnlockIcon',false) : app.models.data.model.set('showUnlockIcon',true); 
//                      // JSON.stringify( scope.get('jsonresume')
                    
//                 //     cvFile = cvFile + '.pdf'
//                 //     var pdf = new jsPDF();
//                 //     pdf.text('Definitely A WORK IN PROGRESS ', 20, 20 )
//                 //         .text(['hi','ho'],30, 30 )
//                 //         .save(cvFile);
//                 }),
//             fastn('div', { 
//                     'class' : 'download'
//                 }, 
//                 fastn('i', {'class': 'mdi mdi-download'})
//             ).on('click',function(event, scope){
                
//                 downloaders.show() ? downloaders.show(false) :  downloaders.show(true);
//                 //show pdf & json modal buttons at the bottom of the control buttons menu
//             })
            