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
        },
        "jsonresume":{
          "basics": {
            "name": "Sholto Maud",
            "label": "Programmer",
            "picture": "",
            "email": "sholto.maud@gmail.com",
            "phone": "+61 (0) 424 094 227",
            "url": "http://shotlom.github.io",
            "location": {
              "address": "Unit 9A 1a St Johns College",
              "postalCode": "4067",
              "city": "St Lucia",
              "countryCode": "AUS",
              "region": "Queensland"
            },
            "profiles": [{
              "network": "Twitter",
              "username": "sholtomaud",
              "url": "http://twitter.com/sholtomaud"
            },{
              "network": "LinkedIn",
              "username": "Sholto Maud",
              "url": "https://www.linkedin.com/in/sholtomaud"
            }]
          },
          "work": [{
            "company": "St John's College",
            "position": "Junior Dean",
            "startDate": "2015-02-01",
            "endDate": "2015-11-01",
            "summary": "The role of Junior Dean involved both weekend caretaker duties, and providing pastoral support to students of the College."
          },{
            "company": "Thiess",
            "position": "Hydrology Database Administrator and Developer",
            "website": "https://www.thiess.com",
            "startDate": "2014-07-01",
            "endDate": "2015-04-01",
            "highlights":["Documentation & testing of legacy batch files","Cloud system PoC","Ratings Operational Report App Developed"],
            "summary": "I was brought on board Thiess to conduct a review of the legacy data systems developed over 20 years. This included successful Proof of Concept testing of a AWS cloud-based Architecture for the Hydstra System."
          },{
            "company": "Arrow Energy",
            "position": "Hydrogeology Database Coordinator and Developer",
            "website": "https://www.arrowenergy.com.au",
            "startDate": "2012-07-01",
            "endDate": "2014-07-01",
            "summary": "At Arrow Energy ."
          },{
            "company": "Kisters Pty Ltd",
            "position": "Systems Engineer",
            "website": "https://www.kisters.com.au",
            "startDate": "2010-05-01",
            "endDate": "2012-06-01",
            "summary": "My time with Kisters Pty Ltd was a highly valuable experience, with a small group of very skilled people in a production environment. In such a small business everyone punched above their weight and wore many hats. I was therefore responsible for a variety of roles including code development, project management,  customer support, documentation and technical consulting."
          },{
            "company": "Melbourne Water",
            "position": "Systems Engineer",
            "website": "https://www.melbournewater.com.au",
            "startDate": "2008-02-01",
            "endDate": "2010-05-01",
            "summary": "."
          },{
            "company": "RMIT University",
            "position": "Research Assistant",
            "website": "https://www.rmit.edu.au",
            "startDate": "2007-01-01",
            "endDate": "2008-01-01",
            "summary": ""
          },{
            "company": "Village Green",
            "position": "Principle Development Manager",
            "website": "http://www.villagegreenglobal.com/",
            "startDate": "2004-04-01",
            "endDate": "2006-12-20",
            "summary": ""
          },{
            "company": "Mars Confectionery Australia",
            "position": "Manufacturing",
            "website": "http://www.mars.com/australia/en/brands/chocolate.aspx",
            "startDate": "1990-04-01",
            "endDate": "1997-12-20",
            "summary": ""
          }],
          "education": [{
            "institution": "University of Queensland",
            "area": "Systems Engineering, Legal & Financial Risk, Hydrogeology, Coal Seam Gas",
            "studyType": "PhD",
            "startDate": "2015-01-01"
          },{
            "institution": "RMIT University",
            "area": "Systems Engineering",
            "studyType": "Master",
            "startDate": "2008-01-01",
            "endDate": "2012-01-01"
          },{
            "institution": "University of Melbourne",
            "area": "Philosophy",
            "studyType": "Post Graduate Diploma",
            "startDate": "2002-01-01",
            "endDate": "2003-01-01"
          },{
            "institution": "Monash University",
            "area": "Environmental Science and Philosophy",
            "studyType": "Bachelor",
            "startDate": "1997-01-01",
            "endDate": "2002-01-01"
          },{
            "institution": "Ballarat High School",
            "studyType": "High School Certificate",
            "startDate": "1984-01-01",
            "endDate": "1990-01-01"
          }],
          "publications": [{
            "name": "Publication",
            "publisher": "Company",
            "releaseDate": "2014-10-01",
            "website": "http://publication.com",
            "summary": "Description..."
          }],
          "skills": [{
            "name": "Web Development",
            "level": "Intermediate-Advanced",
            "keywords": [
              "Node.js",
              "Stylus",
              "MongoDB",
              "NoSQL",
              "SQL",
              "Object Oriented Perl",
              "Moose",
              "Cordova",
              "Frontend",
              "Backend",
              "Rest API",
              "AWS",
              "javaScript"
            ]
          }],
          "languages": [{
            "language": "English",
            "fluency": "Native speaker"
          }],
          "interests": [{
            "name": "Model Based Systems Engineering",
            "keywords": [
              "Systems Engineering"
            ]
          },{
            "name": "Philosophy",
            "keywords": [
              "Leibniz",
              "Social",
              "Political",
              "Economic",
              "Ecological",
              "Natural",
              "Simulation"
            ]
          }],
          "references": [{
            "name": "Jane Doe",
            "reference": "Reference..."
          }]
        }  
    }),
    ntf = {
    "notes":[
            {
              "_id":"01",
              "title": "sholto pushed some code",
              "source": "GitHub",
              "mdi": "github-circle",
              "date": "2016-01-01T18:25:43.511Z",
              "snippit": "Patched x script because of y",
              "url": "http://twitter.com/sholtomaud"
            },{
              "_id":"02",
              "title": "Much complaint about nothing",
              "source": "Blog entry",
              "mdi": "pen",
              "date": "2015-12-23T18:25:43.511Z",
              "snippit": "Why does the issue ...",
              "url": "http://twitter.com/sholtomaud"
            },{
              "_id":"03",
              "title": "sholto posted",
              "source": "facebook",
              "mdi": "facebook",
              "date": "2013-07-10T18:25:43.511Z",
              "snippit": "Some spam  ...",
              "url": "http://twitter.com/sholtomaud"
            },{
              "_id":"04",
              "title": "Some blog entry",
              "source": "Twitter @sholtomaud",
              "mdi": "twitter",
              "date": "2012-04-02T18:25:43.511Z",
              "snippit": "Some such ...",
              "url": "http://twitter.com/sholtomaud"
            },{
              "_id":"04",
              "title": "Some instagram",
              "source": "Instagram @sholtomaud",
              "mdi": "instagram",
              "date": "2010-01-01T18:25:43.511Z",
              "snippit": "some photo ...",
              "url": "http://twitter.com/sholtomaud"
            }
          ]
    };

    // Unlike the Dutch & Portuguese, the Brits brought the Westminster system with them which, among the colonial systems, was at the time possibly the best procedures available for operating a legislature. But they were as uncivilized, savage, merciless and terroristic barbarians like all the other colonists.

dataModel.on('.|*', function (data){
    console.log('dataModel data: ',data);
})

function init(callback){
    dataModel.set('notes',ntf.notes);
    callback(null, dataModel.get('data') ) 
}

init( function(error, data){
        // console.log("data changed", data);
    }
);

module.exports = {
    model: dataModel
};
