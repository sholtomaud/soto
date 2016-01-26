var fastn = require('^fastn'),
    app = require('^app');
    
module.exports = function( activityModel ){
    return fastn('div', {class: 'infoPage'}, 
            fastn('div',{class:'infoTitle'}, 'note to file - 25 Jan \'16 '),
            fastn('div', {class: 'introPhoto'}, 
                fastn('img', { src: fastn.binding('currentPhoto', function(base){
                        return 'data:image/jpg;base64,' + base;
                    })
                })
            ),
            fastn('div',{class:'infoSectionTitle'}, 'ABOUT MYSELF:'),
            fastn('div',{class:'appDetails'}, 'Today I\'m mostly interested in how Node.js and NoSQL can deliver info-system requirements. With server-side capabilities of Node, it just makes sense to do full stack javaScript.'),
            fastn('div',{class:'appDetails'}, 'That said, I also have a very wide variety of interests outside of coding, and a primary design intent for this app is to document those interests, and give you access them. Facebook does this, Twitter, etc., but "the I" is distributed by these systems. Also I needed an app to demo my skills.'),
            fastn('div',{class:'appDetails'}, 'There has always been a philosophical element to my life and education, and it\'s philosophy which somehow justifies the complex variety of my interests.'),
            fastn('div',{class: 'appInfo'}, 
                fastn('div',{class:'infoSectionTitle'}, 'ABOUT THE APP:'),
                fastn('div',{class:'appDetails'},  'I wrote this app using the ', 
                    fastn('a',{
                        href: 'http://korynunn.github.io/fastn/'
                    }, 'fastn'),
                    ' toolkit, along with a bit of ',
                    fastn('a',{
                        href: 'https://nodejs.org/en/'
                    }, 'Node.js')
                    ,' and a bit of ',
                    fastn('a',{
                        href: 'http://stylus-lang.com/'
                    }, 'Stylus'),

                    ' for css processing. It has a generic persistence layer, and uses ', 
                    fastn('a',{
                        href: 'https://www.mongodb.com/'
                    }, 'MongoDB'),
                    ' for storage.' 
                )
            )
        ).attach(app.models.stats.model);
}

