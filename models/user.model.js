"use strict";

import bcrypt from "bcryptjs";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER 
    },
    email: {
      type: DataTypes.TEXT,
      validate: {
        isEmail: true
      }
    },
    username: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {
    hooks: {
      afterValidate: function(user) {
        user.password = bcrypt.hashSync(user.password, 8);
      }
    }
  });
  return User;
};
