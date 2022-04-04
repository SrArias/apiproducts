const center = require('./../models/center.models')

exports.get = async()=>{    
    try {
        const centers=await center.findAll()
        return centers
    } catch (error) {
        throw error
    }
} 

exports.getOne = async(idcen)=>{    
    try {
        const centers=await center.findAll({where:{ idcen }})
        return centers
    } catch (error) {
        throw error
    }
} 

exports.create=async({strnomcen,strdepartamento,strciudad,strdireccion,strtelefono})=>{
    try {
        const query = {strnomcen,strdepartamento,strciudad,strdireccion,strtelefono};
        const centercreate = await center.create(query)
        return centercreate
    } catch (error) {
        throw error
    }
}

exports.update = async({idcen,strnomcen,strdepartamento,strciudad,strdireccion,strtelefono})=>{
    try {
        const query = {idcen}
        const update = {strnomcen,strdepartamento,strciudad,strdireccion,strtelefono}
        await center.update(update,{where:query})
        return "Actualizado con exito"    
    } catch (error) {
       throw error 
    }
}

exports.delete = async (idcen) =>{
    try {
        await center.destroy({where:{idcen}})
        return "Se elimino con exito"
    } catch (error) {
        throw error
    }    
}