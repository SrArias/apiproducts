const DataTypes = require("sequelize");

const sequilize = require("../connections/connectiondb");

const Ingress = sequilize.define("tblIngreso", {
  dateing: { type: DataTypes.DATE },
  stridprod: { type: DataTypes.STRING },
  intcanting: { type: DataTypes.INTEGER },
  iding: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }  
},{  
  timestamps:false,
  freezeTableName:true
});

module.exports=Ingress