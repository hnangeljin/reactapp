var Comment = require('../models/Comment');
var Promise = require('bluebird');

module.exports = {

  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Comment.find(params, function(err, Comment){
        if(err){
          reject(err);
          return;
        }
        resolve(Comment);
      })
    })
  },

  getById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Comment.find(id, function(err, Comment){
        if(err){
          reject(err);
          return;
        }
        resolve(Comment);
      })
    })
  },

  post: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Comment.create(params, function(err, Comment){
        if(err){
          reject(err);
          return;
        }
        resolve(Comment);
      })
    })
  }
}
