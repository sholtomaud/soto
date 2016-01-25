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
            fastn('div',{class:'appDetails'}, 'ABOUT MYSELF:'),
            fastn('div',{class:'appDetails'}, 'Today I am mostly interested in ways that Node.js and NoSQL can meet our system requirements. JavaScript has really moved a lot since I first looked at it many years ago, and with server-side capabilities of Node, and access to the file system, it just makes sense to do full stack javaScript these days.'),
            fastn('div',{class:'appDetails'}, 'That said however, I\'m the first to admit I have a very wide variety of interests. The primary aim of this app is to document those interests, my thoughts about them, and to give you access them! Facebook does this, Twitter, etc., but "the I" is distributed by these systems. Also I needed an app to demo my skills, so this is my app.'),
            fastn('div',{class:'appDetails'}, 'I began learning javaScript in my 20\'s, just after it first came out in Netscape, however it was seen as a toy language back then so I moved my career to VisualBasic but I didn\'t like being constrained to MS. My next programming language was Perl, which I started about 10 years ago and used in a production environment. '),
            fastn('div',{class:'appDetails'}, 'There has always been a philosophical element to my life and education. Philosophy somehow justifies the variety of interests.'),
            fastn('div',{class: 'appInfo'}, 
                fastn('div',{class:'appDetails'}, 'ABOUT THE APP:'),
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
                    ' for css processing. It is a work in progress.' 
                )
            )
        ).attach(app.models.stats.model);
}

