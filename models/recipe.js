// Recipe model

module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {

    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    }
  });
  return Recipe;
};
