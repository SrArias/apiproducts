const ingress = require('./../models/ingress.models')

exports.get=async()=>{    
    try {
        const ingresses=await ingress.findAll()
        return ingresses
    } catch (error) {
        throw error
    }
} 

exports.getOne=async(iding)=>{    
    try {
        const ingresses=await ingress.findAll({where:{ iding }})
        return ingresses
    } catch (error) {
        throw error
    }
} 

exports.create = async({stridprod,intcanting})=>{
    try {
        const query = {stridprod,intcanting}
        const ingresses = await ingress.create(query)
        return ingresses
    } catch (error) {
        throw error
    }
}

exports.update = async({iding,stridprod,intcanting})=>{
    try {
        const query = {iding}
        const update = {stridprod,intcanting}
        await ingress.update(update,{where:query})
        return "Actualizacion realizada con exito"
    } catch (error) {
        throw error
    }
}

exports.delete=async(iding)=>{
    try {
        await ingress.destroy({where:{iding}})
        return "Eliminado con exito"
    } catch (error) {
        throw error
    }
}