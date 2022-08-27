const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class RecipeTag extends Model{};

RecipeTag.init({
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "Tree",
    timestamps: false
});

module.exports = Tree;