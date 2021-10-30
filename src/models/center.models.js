const DataTypes = require("sequelize");

const sequilize = require("../connections/connectiondb");

const Center = sequilize.define("tblCentros", {
  strtelefono: { type: DataTypes.STRING },
  strdireccion: { type: DataTypes.STRING },
  strciudad: { type: DataTypes.STRING },
  strdepartamento: { type: DataTypes.STRING },
  strnomcen: { type: DataTypes.STRING },
  idcen: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }  
},{  
  timestamps:false,
  freezeTableName:true
});

module.exports=Center
