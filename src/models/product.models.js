const DataTypes = require("sequelize");

const sequilize = require("../connections/connectiondb");

const Product = sequilize.define("tblProducto", {
  strnomprod: { type: DataTypes.STRING },
  intidcat: { type: DataTypes.INTEGER },
  intuniprod: { type: DataTypes.INTEGER },
  dtfecha_ingreso:{type:DataTypes.DATE},
  idprod: { type: DataTypes.STRING, primaryKey: true}  
},{  
  timestamps:false,
  freezeTableName:true
});

module.exports=Product
