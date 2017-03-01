var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource;

  var controller = controllers[resource];
  if(controller == null){
    res.json({
      confirmation: 'fail',
      resource: 'Invalid Resource'
    })
    return;
  }

  controller.get(req.query, false)
  .then(function(results){
    res.json({
      confirmation: 'sucess',
      results: results
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })

})

router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;

  var controller = controllers[resource];
  if(controller == null){
    res.json({
      confirmation: 'fail',
      resource: 'Invalid Resource'
    })
    return;
  }

  var id = req.params.id;
  controller.getById(id, false)
  .then(function(result){
    res.json({
      confirmation: 'sucess',
      result: result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: 'Not found'
    })
  })

})

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource;

  var controller = controllers[resource];
  if(controller == null){
    res.json({
      confirmation: 'fail',
      resource: 'Invalid Resource'
    })
    return;
  }

  controller.post(req.body, false)
  .then(function(result){
    res.json({
      confirmation: 'sucess',
      result: result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })

})


module.exports = router;
