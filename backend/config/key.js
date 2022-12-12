require("dotenv").config();
module.exports = {
  mongoURI: "mongodb://0.0.0.0:27017/Boutique",
  SECRET: process.env.APP_SECRET,
};
