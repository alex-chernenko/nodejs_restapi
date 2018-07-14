const router = require("express").Router();
var Mes = require('../../models/message.js');
router.get('/message', function(req, res, next) {
 
    Mes.find(function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  });
router.get('/message/:id', function(req, res, next) {
  Mes.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.delete('/message/:id', function(req, res, next) {
  Mes.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.put('/message/:id', function(req, res, next) {
  Mes.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post('/message', function(req, res, next) {
    Mes.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

module.exports = router;