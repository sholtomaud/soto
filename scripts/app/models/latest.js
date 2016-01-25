var fastn = require('^fastn'),
    latestModel = new fastn.Model();

latestModel.on('.|*', function (data){
    console.log('latestModel data: ',data);
})


module.exports = {
    model: latestModel
};
