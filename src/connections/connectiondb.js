const key=require('../key')

const sequelize_1 = require('sequelize')
const sequelize = new sequelize_1.Sequelize(key.keydb.mysql)

const testconexion = async(sequelize)=>{
    try {
        await sequelize.authenticate()
        console.log('conected mysql')
    } catch (error) {
        console.log(error)
    } 
}
testconexion(sequelize)
module.exports=sequelize