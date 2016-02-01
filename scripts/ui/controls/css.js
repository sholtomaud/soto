var fastn = require('^fastn'),
    app = require('^app'),
    simpleDate = require('simple-date');
    file = simpleDate.format(new Date(), 'dashed' );

module.exports = function( activityModel ){
    
    return fastn('div', {class : 'css3'}, fastn('i', {'class': 'mdi mdi-language-css3' } ) )
        .on('click', function(event, scope) {
                event.preventDefault();
                event.stopImmediatePropagation();
                
                require('./downloadModal').show(true);
        })
        .on('dragenter',  function(event){ 
            event.preventDefault();
            // console.log( 'target', event.relatedTarget );
            
            event.target.classList.add('css3DragOver');    
            verifyCSS(event);

        })
        .on('dragleave',  function(event){ 
            event.preventDefault();
            event.target.classList.remove('css3DragOver');
            app.models.data.resetStyleToDefault();
        })
        .on('drop', function(event) {
            event.preventDefault();
            event.target.classList.remove('css3DragOver');
            dropFile(event);

        }).attach(app.models.data.model);
}

function verifyCSS(event){
     var file = event.dataTransfer.files[0]; 
    
     if (!file.type.match('application/json')) {
        // alert('Not a JSON file!');
        // require('../modals/fileTypeWarning').show(true);
        notJSON.show(true);
    }
    
    var reader = new FileReader();
    reader.onloadend = function( ) {
        var data = JSON.parse(this.result);
        
     if ( data.schemaType === 'css'){
        event.target.classList.add('css3DragOver');    
        app.models.data.updateStyle(data, function(error, update){
            console.log('no error');        
        });
        }
    };
}

function dropFile(event){
    var file = event.dataTransfer.files[0]; 
    
    if (!file.type.match('application/json')) {
        // alert('Not a JSON file!');
        // require('../modals/fileTypeWarning').show(true);
        notJSON.show(true);
    }
    
    var reader = new FileReader();
    reader.onloadend = function( ) {
        var data = JSON.parse(this.result);
        
        if ( data.schemaType === 'css'){
            
            // app.models.data.model.set('styles.currentStyle', data);
            app.models.data.updateStyle(data, function(error, update){
                event.target.classList.remove('css3DragOver');    
            });
        }
            
    };
    reader.readAsText(event.dataTransfer.files[0]);    
}


var notJSON = fastn('modal', {class: 'mainMenu'},
    'Not a json file type'   
);

notJSON.render();

document.body.appendChild(notJSON.element);