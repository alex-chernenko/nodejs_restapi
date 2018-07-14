const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },
  addOne: (info,callback)=>{
    UserRepository.addUser(info,(err,data)=>{
        callback(err,data);
    });
},

};
