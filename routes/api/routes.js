const message = require("./message");
const user = require("./user");
module.exports = function(app) {
  app.use("/message", message);
  
app.use("/api", user);
};