


fastn('a', { 
        'class' : 'css3',
        'href' : fastn.binding('styles.customStyle', function( css ){
            console.log('css',css);
            var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(css));
            return 'data:' + data;
        }),
        'download' : file + '.json'
        }, fastn('i', {'class': 'mdi mdi-language-css3' } )
    )