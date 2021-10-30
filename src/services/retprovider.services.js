const retprovider = require('./../models/retprovider.models')

exports.get = async()=>{    
    try {
        const retproviders = await retprovider.findAll()
        return retproviders
    } catch (error) {
        throw error
    }
}

exports.getOne = async(iddep)=>{    
    try {
        const retproviders = await retprovider.findAll({where:{ iddep }})
        return retproviders
    } catch (error) {
        throw error
    }
} 

exports.create = async({stridprod,intcandep,strcomendep})=>{
    try {
        const query = {stridprod,intcandep,strcomendep}
        await retprovider.create(query)
        return "Creado con exito"
    } catch (error) {
        throw error
    }
}

exports.update = async({iddep,stridprod,intcandep,strcomendep})=>{
    try {
        const query = {iddep}
        const update ={stridprod,intcandep,strcomendep}
        await retprovider.update(update,{where:query})
        return "Actualizacion con exito"
    } catch (error) {
        throw error
    } 
}

exports.delete = async(iddep)=>{
    try {
        await retprovider.destroy({where:{iddep}})
        return "Eliminacion con exito"
    } catch (error) {
        throw error
    }
}