const DataTypes = require("sequelize");

const sequilize = require("../connections/connectiondb");

const Category = sequilize.define("tblCategoria", {  
  strdesccat: { type: DataTypes.STRING },
  strnomcat: { type: DataTypes.STRING },
  idcat: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }  
},{  
  timestamps:false,
  freezeTableName:true
});

module.exports=Category