const router = require("express").Router();
const userService = require("../../services/user");
var User = require('../../models/user.js');
router.get("/user", (req, res, next) => {
  userService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});
router.get('/user/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.delete('/user/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.put('/user/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post('/user',function(req,res,next){
  let info=req.body;
  userService.addOne(info,function(err,data){
      if(err){
          res.status(400).send(err);
      }
      else{
          res.data=data;
          res.json(res.data);
      }
  });
});
// var Mes = require('../../models/message.js');
// router.get('/message', function(req, res, next) {
//     Mes.find(function (err, products) {
//       if (err) return next(err);
//       res.json(products);
//     });
//   });
// router.get('/message/:id', function(req, res, next) {
//   Mes.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
// router.delete('/message/:id', function(req, res, next) {
//   Mes.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
// router.put('/message/:id', function(req, res, next) {
//   Mes.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
// router.post('/message', function(req, res, next) {
//     Mes.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });

module.exports = router;
