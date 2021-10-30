const DataTypes = require("sequelize");

const sequilize = require("../connections/connectiondb");

const transaction = sequilize.define("tblTransacciones", {
  dateven: { type: DataTypes.DATE },
  strcomentven: { type: DataTypes.STRING },
  intcanven: { type: DataTypes.INTEGER },
  stridprod:{ type: DataTypes.STRING },
  intidcentro: { type: DataTypes.INTEGER },
  idven: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }  
},{  
  timestamps:false,
  freezeTableName:true
});

module.exports=transaction
