var fastn = require('^fastn'),
    searchModel = new fastn.Model({
        searchString: null,
        searchResult: null,
        markersResult: null
    }),
    Search = require('../services').search,
    token = require('./session').token;

//debug
searchModel.on('.|**', function(data){
   // console.log('searchModel changed debug: ',data);
});

function searchSite ( data ){
    Search.site( token(), data, function (error, data){
        if(error){
            console.log(error)
        }
        searchModel.set('searchResult', data);     
    });
}

function searchReset(){
    searchModel.set( 'searchString', null );
}

var site = fastn.binding('searchString').attach(searchModel)
    .on('change', function (data){
        if(!data || data == ' ' || data == '  '){
            searchModel.set('searchResult',null);
            return;
        }
        var search ={}
        search['field'] = 'rn';
        search['value'] = data;
        searchSite(search);
    });


module.exports = {
  model : searchModel,
  site: site,
  reset: searchReset
}