const mongoose = require("mongoose");

const mesSchema = mongoose.Schema({
  senderId: String,
  receiverId: String,
  text: String
});

const Mes = mongoose.model("Mes", mesSchema);

module.exports = Mes;