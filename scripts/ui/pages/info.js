var fastn = require('^fastn'),
    app = require('^app');
    
module.exports = function( activityModel ){
    return fastn('div', {class: 'infoPage'}, 
            fastn('div',{class:'infoTitle'}, 'note to file - 25 Jan \'16 '),
            fastn('div',{class: 'appInfo'},
                fastn('div',{class:'infoSectionTitle'}, 'ABOUT THE APP:'), 
                fastn('div',{class:'appDetails'},  'I wrote this app using a couple of very cool javaScript tools - the javaScript tool ', 
                    fastn('a',{
                        href: 'http://korynunn.github.io/fastn/'
                    }, 'fastn'),
                    ' in particular is woth highlighting. I\'ve been using fastn instead of Angular, or any of the other frameworks.'),
                    fastn('div',{class:'appDetails'},  ' Basically it means all you need is javaScript, fastn and css. Along with fastn, there is a bit of ',
                    fastn('a',{
                        href: 'https://nodejs.org/en/'
                    }, 'Node.js')
                    ,' and a bit of ',
                    fastn('a',{
                        href: 'http://stylus-lang.com/'
                    }, 'Stylus'),

                    ' for css processing. '
                    
                ),
                fastn('div',{class:'appDetails'} , 'The app also makes use of jsPDF, material design icons and the JSONResume schema.'),
                fastn('div',{class:'appDetails'} , 'Currently it is hosted using GitHub pages, however it has the capability of a generic persistence layer, using a NoSQL storage services like ', 
                    fastn('a',{
                        href: 'https://www.mongodb.com/'
                    }, 'MongoDB'),
                    ', which will be implemented later.'
                )     
            )
        ).attach(app.models.stats.model);
}

