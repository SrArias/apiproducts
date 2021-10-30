const DataTypes = require("sequelize");

const sequilize = require("../connections/connectiondb");

const retprovider = sequilize.define("tblDevProve", {
  datedep:{ type:DataTypes.DATE},
  strcomendep: { type: DataTypes.STRING },
  intcandep: { type: DataTypes.INTEGER },
  stridprod: { type: DataTypes.STRING },
  iddep: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }  
},{  
  timestamps:false,
  freezeTableName:true
});

module.exports=retprovider
