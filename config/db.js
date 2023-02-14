require("dotenv").config();
const URL = process.env.mongoUrl;
const mongoose = require("mongoose");
const connection = mongoose.connect(URL);

module.exports = {
  connection
<<<<<<< HEAD
};
=======
};
>>>>>>> fa282ab46fbac723d4e40c0669a59678d8a85df1
