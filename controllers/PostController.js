var Post = require('../models/Post');
var Promise = require('bluebird');

module.exports = {

  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Post.find(params, function(err, posts){
        if(err){
          reject(err);
          return;
        }

        if(isRaw)
          resolve(posts);
          else{
            var list = [];
            posts.forEach(function(post, i){
              list.push(post.summary());
            })
            resolve(list);
          }
      })
    })
  },

  getById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Post.find(id, function(err, post){
        if(err){
          reject(err);
          return;
        }
        resolve(post);
      })
    })
  },

  post: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Post.create(params, function(err, posts){
        if(err){
          reject(err);
          return;
        }
        resolve(posts);
      })
    })
  }
}
