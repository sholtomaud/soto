var fastn = require('^fastn'),
    app = require('^app'),
    jsPDF = require('jspdf-browserify'),
    simpleDate = require('simple-date');
    cvFile = simpleDate.format(new Date(), 'dashed' );

module.exports = function(){
    var controls = fastn('modal',{ 'class' : 'control-option' }, 
            fastn('a', { 
                'class' : 'css3',
                'href' : fastn.binding('styles.customStyle', function( css ){
                    console.log('css',css);
                    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(css));
                    return 'data:' + data;
                }),
                'download' : cvFile + '.json'
                }, fastn('i', {'class': 'mdi mdi-language-css3' } )
            )
            .on('dragenter',  function(event){ 
                event.preventDefault();
                event.target.classList.add('css3DragOver');
            })
            .on('dragleave',  function(event){ 
                event.preventDefault();
                event.target.classList.remove('css3DragOver');
            })
            .on('drop', function(event) {
                event.preventDefault();
                event.target.classList.remove('css3DragOver');
                var file = event.dataTransfer.files[0]; 
                if (!file.type.match('application/json')) {
                    alert('Not a JSON file!');
                }
                
                var reader = new FileReader();
                reader.onloadend = function( ) {
                    var data = JSON.parse(this.result);
                    console.log(data);
                    app.models.data.model.set('styles.customStyle', data);
                };
                reader.readAsText(event.dataTransfer.files[0]);    
            }),
            fastn('div', { 
                'class' : 'downloadPDF'
            }, 
                fastn('i', {'class': 'mdi mdi-file-pdf' } ) )
                .on('click', function(event, scope){
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    var cvData = scope.get('data.dndjsonresume') ;
                    cvFile = cvFile + '.pdf'
                    
                    var details = [];
                    for(section in cvData){
                        details.push(section);
                        if ( cvData[section] !== null && typeof cvData[section] === 'object' ){
                            for( item in cvData[section] ){
                                if ( cvData[section][item] !== null && typeof cvData[section][item] !== 'object' ){
                                    var line = item +': '+ cvData[section][item];
                                    details.push(line);
                                }
                                else if (cvData[section][item] !== null && typeof cvData[section][item] === 'object'){
                                    for( i in cvData[section][item] ){
                                        var l = i +': '+ cvData[section][item][i];
                                        details.push(l);       
                                    }
                                }
                            }
                        }
                    }

                    var pdf = new jsPDF('p', 'pt');
                    pdf.text(details, 20, 20 )
                    pdf.save(cvFile);
            }),
            fastn('a', { 
                'class' : 'downloadJSON',
                'href' : fastn.binding('data.dndjsonresume', function( resume ){
                    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume));
                    return 'data:' + data;
                }),
                'download' : cvFile + '.json'
                },'JayRes'
            )
            // .on('click', function(){
            //     downloaders.show(false);
            // })
        )

    controls.render();
    document.body.appendChild(controls.element);
    
    return controls;  
}



// var control = fastn('div',{ 'class' : 'downloadButtons' }, 
//     fastn('div', { 
//         'class' : 'downloadPDF'
//     }, 
//         fastn('i', {'class': 'mdi mdi-file-pdf' } ) )
//         .on('click', function(event, scope){
//             event.preventDefault();
//             event.stopImmediatePropagation();
//             var pdf = new jsPDF();
//             cvFile = cvFile + '.pdf'
//             pdf.setFont('Times New Roman', 'normal');
//             pdf.text(20, 20, 'Definitely A WORK IN PROGRESS ' );
//             pdf.text(30, 30, JSON.stringify( scope.get('jsonresume') ));
//             pdf.save(cvFile);
//     }),
//     fastn('a', { 
//         'class' : 'downloadJSON',
//         'href' : fastn.binding('jsonresume', function( resume ){
//             var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume));
//             return 'data:' + data;
//         }),
//         'download' : cvFile + '.json'
//     }, 'json')
//     // .on('click', function(){
//     //     event.preventDefault();
//     //     event.stopImmediatePropagation();    
//     // })
// );

// module.exports = control;
