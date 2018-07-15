const message = require("./message");
const user = require("./user");
var User = require('../../models/user.js');
var Mes = require('../../models/message.js');
module.exports = function(app) {

    
        
    app.get('/history/:id', function(req, res, next) {
            Mes.find({ senderId: req.params.id}, function (err, post) {
              
               let l = JSON.stringify(post, function(key, value) {
                  if (key === 'senderId') {
                    return undefined; 
                  }
                  if (key === '_id') {
                    return undefined; 
                  }
                  if (key === 'text') {
                    return undefined; 
                  }
                  if (key === '__v') {
                    return undefined; 
                  }
                  else {
                  return value;
                  }
                }); 
             
             
              if (err) return next(err);
                
              
              res.send(l);
            });

           
      });
app.use("/api",user,message);
};