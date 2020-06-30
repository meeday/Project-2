// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    googleId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: true

    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    }
  });
  return User;
};
