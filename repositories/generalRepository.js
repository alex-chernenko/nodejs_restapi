function Repository() {}

Repository.prototype.getAll = getAll;


function getAll(callback) {
  var model = this.model;
  var query = model.find();
  query.exec(callback);
}




module.exports = Repository;
