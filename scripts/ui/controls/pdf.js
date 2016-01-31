var fastn = require('^fastn'),
    app = require('^app'),
    jsPDF = require('jspdf-browserify'),
    simpleDate = require('simple-date');
    file = simpleDate.format(new Date(), 'dashed' );

module.exports = function( activityModel ){
    return fastn('div', { 
                    'class' : 'downloadPDF'
                }, 
                fastn('i', {'class': 'mdi mdi-file-pdf' } ) 
            )
            .on('click', function(event, scope){
                event.preventDefault();
                event.stopImmediatePropagation();
                var cvData = scope.get('data.resume') ;
                file = file + '.pdf'
                
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
                pdf.save(file);
            })
            .attach(app.models.data.model);
}