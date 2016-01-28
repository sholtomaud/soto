var fastn = require('^fastn'),
    app = require('^app');
    
module.exports = function( activityModel ){
    return fastn('div', {class: 'infoPage'}, 
            fastn('div',{class:'infoTitle'}, 'note to file - 25 Jan \'16 '),
            fastn('div',{class: 'appInfo'},
                fastn('div',{class:'infoSectionTitle'}, 'ABOUT THE APP:'), 
                fastn('div',{class:'appDetails'},  'I wrote this app using a couple of very cool javaScript tools - ', 
                    fastn('a',{
                        href: 'http://korynunn.github.io/fastn/'
                    }, 'fastn.js'),
                    ' by ',
                    fastn('a',{
                        href: 'http://korynunn.github.io/me/'
                    }, 'Kory Nunn'),
                    ' is worth highlighting in particular. I\'ve been using fastn instead of Angular, or any of the other frameworks, and in short it\'s a gem. All the js for this app compiles down to about 400kb.'),
                    fastn('div',{class:'appDetails'},  ' Basically all you need is javaScript and css. There is some ',
                    fastn('a',{
                        href: 'https://nodejs.org/en/'
                    }, 'Node.js')
                    ,' and a bit of ',
                    fastn('a',{
                        href: 'http://stylus-lang.com/'
                    }, 'Stylus'),

                    ' for css processing. '
                    
                ),
                fastn('div',{class:'appDetails'} , 'The app also makes use of ', 
                    fastn('a',{
                        href: 'https://www.npmjs.com/package/browserify'
                    }, 'Browserify'),
                    ', ',
                    fastn('a',{
                        href: 'https://www.npmjs.com/package/jspdf-browserify'
                    }, 'jsPDF'),
                    ', Google\'s Fonts and ',
                    fastn('a',{
                        href: 'https://materialdesignicons.com/'
                    }, 'Material Design Icons'),
                    ', and ',
                    fastn('a',{
                        href: 'http://jsonresume.org/'
                    }, 'JSONResume'),
                    '.'),
                fastn('div',{class:'appDetails'} , 'Currently it is hosted using GitHub pages so it is a static page without a database, however it has the capability of a generic persistence layer, using a NoSQL storage services like ', 
                    fastn('a',{
                        href: 'https://www.mongodb.com/'
                    }, 'MongoDB'),
                    ', which will be implemented later.'
                )     
            )
        ).attach(app.models.stats.model);
}

