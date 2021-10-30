const transaction = require('./../models/transaction.models')

exports.get=async()=>{    
    try {
        const transactions=await transaction.findAll()
        return transactions
    } catch (error) {
        throw error
    }
} 

exports.getOne=async(idven)=>{    
    try {
        const transactions=await transaction.findAll({where:{ idven }})
        return transactions
    } catch (error) {
        throw error
    }
} 

exports.create = async({intidcentro,stridprod,intcanven,strcomentven})=>{
    try {
        const query = {intidcentro,stridprod,intcanven,strcomentven}
        await transaction.create(query)
        return "Creado con exito"
    } catch (error) {
        throw error
    }
}

exports.update = async({idven,intidcentro,stridprod,intcanven,strcomentven})=>{
    try {
        const query = {idven}
        const update = {intidcentro,stridprod,intcanven,strcomentven}
        await transaction.update(update,{where:query})
        return "Actualizado con exito"
    } catch (error) {
        throw error
    }
}

exports.delete=async(idven)=>{
    try {
        await transaction.destroy({where:{idven}})
        return "Eliminado con exito"
    } catch (error) {
        throw error
    }
}