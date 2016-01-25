var fastn = require('^fastn'),
    Session = require('../services').session;

var sessionModel = new fastn.Model({
    loginError: null
});

// debugging
sessionModel.on('.|**', function(sessionData){
    // console.log('sessionData model change',sessionData);
});


module.exports = {
  model: sessionModel,
  setSession: function(sessionData){
    sessionModel.update(sessionData);
  },
  token: fastn.binding('session.token').attach(sessionModel),
  loginMessage: fastn.binding('loginError').attach(sessionModel),
  userName: fastn.binding('session.userName').attach(sessionModel),
  userAccessLevel: fastn.binding('session.userAccessLevel').attach(sessionModel),
  company: fastn.binding('session.companyId').attach(sessionModel)
};
