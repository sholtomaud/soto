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
    jayres = require('./jsonresume'),
    bio = require('./autobiography'),
    ntf = require('./ntf'),
    jsonResumeSchema = require('./jsonResumeSchema');
    // library = require('./library');

    data.jsonresume = jayres;
    data.bio = bio;
    data.notes = ntf;
    schemas.jsonResumeSchema = jsonResumeSchema;
    // data.library = library;
    // Unlike the Dutch & Portuguese, the Brits brought the Westminster system with them which, among the colonial systems, was at the time possibly the best procedures available for operating a legislature. But they were as uncivilized, savage, merciless and terroristic barbarians like all the other colonists.
// console.log('bio',jayres);

dataModel.on('.|*', function (data){
    console.log('dataModel data: ',data);
})

function init(){
    dataModel.set('data',data);
    dataModel.set('schemas',schemas)
}

init();

module.exports = {
    model: dataModel
};
