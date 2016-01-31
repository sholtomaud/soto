var fastn = require('^fastn');
    // app = require('^app'),
    // simpleDate = require('simple-date');
    // cvFile = simpleDate.format(new Date(), 'dashed' );

module.exports = function(){
    var controls = fastn('div',{ 'class' : 'controls' }, 
            require('./css')(),
            require('./pdf')(),
            require('./jayres')()
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
