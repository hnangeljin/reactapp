var Profile = require('../models/Profile');
var Promise = require('bluebird');

module.exports = {

  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Profile.find(params, function(err, Profile){
        if(err){
          reject(err);
          return;
        }
        resolve(Profile);
      })
    })
  },

  getById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Profile.find(id, function(err, Profile){
        if(err){
          reject(err);
          return;
        }
        resolve(Profile);
      })
    })
  },

  post: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Profile.create(params, function(err, Profile){
        if(err){
          reject(err);
          return;
        }
        resolve(Profile);
      })
    })
  }
}
