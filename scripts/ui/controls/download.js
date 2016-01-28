var fastn = require('^fastn'),
    app = require('^app'),
    jsPDF = require('jspdf-browserify'),
    simpleDate = require('simple-date');
    cvFile = simpleDate.format('dashed',new Date() ) + '.pdf';

module.exports = function(){
    var controls = fastn('div',{ 'class' : 'controls' }, 
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

                    // var columns = ["ID"];
                    var pdf = new jsPDF('p', 'pt');
                    // pdf.API.autoTable(columns, details);
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
            ).on('click', function(){
                downloaders.show(false);
            })
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
