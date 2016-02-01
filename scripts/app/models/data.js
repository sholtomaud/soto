var fastn = require('^fastn'),
    fs = require('fs'),
    dataModel = new fastn.Model({
        "currentNote":{
              "_id":"01",
              "title": "Small complaints about something",
              "source": "@sholtomaud",
              "mdi": "Twitter",
              "date": "2015-12-23T18:25:43.511Z",
              "snippit": "Why does the issue",
              "fullText": "Why does an issue always seems to be \"something rather\", rather than, \"nothing rather\"? Indeed, why is there some issue rather than no issue? This is the question.",
              "url": "http://twitter.com/sholtomaud"
        }
    }),
    data = {},
    schemas = {},
    styles = {},
    jayres = require('./jsonresume'),
    bio = require('./autobiography'),
    ntf = require('./ntf'),
    jsonResumeSchema = require('./jsonResumeSchema');
    jsonResumeStyle = require('./jsonResumeStyle');
    // library = require('./library');

    data.resume = jayres;
    data.bio = bio;
    data.notes = ntf;
    schemas.jsonResumeSchema = jsonResumeSchema;
    styles = jsonResumeStyle;
    // data.library = library;
    // Unlike the Dutch & Portuguese, the Brits brought the Westminster system with them which, among the colonial systems, was at the time possibly the best procedures available for operating a legislature. But they were as uncivilized, savage, merciless and terroristic barbarians like all the other colonists.
// console.log('bio',jayres);

dataModel.on('.|*', function (data){
    console.log('dataModel data: ',data);
})

dataModel.on('styles.defaultStyle', function (defaultStyle){
    dataModel.set('styles.currentStyle',defaultStyle);
})

dataModel.on('data.defaultResume', function (resume){
    dataModel.set('data.currentResume',resume);
})


function init(){
    dataModel.set('data',data);
    dataModel.set('schemas',schemas);
    dataModel.set('styles',styles);
}

function resetStyleToDefault(){
    var defaultStyle = dataModel.get('styles.defaultStyle');
    dataModel.set('styles.currentStyle', defaultStyle);
}

function resetResumeToDefault(){
    var defaultResume = dataModel.get('data.defaultResume');
    dataModel.set('data.currentResume', defaultResume );
}

function updateStyle(style, callback){
    var currentResume = dataModel.get('data.currentResume');
    dataModel.set('styles.currentStyle', style);
    //   , function(){
    //   console.log('done update');
    // });
    dataModel.set('data.currentResume', currentResume);
    callback(null,null);
}

function currentStyle(key){
    var currentStyle = dataModel.get('styles.currentStyle');
    // console.log('key',key);
    return currentStyle[key]['style'];
}

function currentStyleLabel(key){
    var currentStyle = dataModel.get('styles.currentStyle');
    return ( currentStyle.hasOwnProperty( key ) ) ?  currentStyle[key]['label'] : key;
}




init();

module.exports = {
    model: dataModel,
    resetStyleToDefault: resetStyleToDefault,
    updateStyle: updateStyle,
    currentStyle : currentStyle, 
    currentStyleLabel : currentStyleLabel 
};
