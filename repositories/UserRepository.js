const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = User;
  
}

function addUser(info,callback){
  let newUser=new User(info);
  newUser.save(callback); 
};

UserRepository.prototype = new Repository();
UserRepository.prototype.addUser = addUser;
module.exports = new UserRepository();
