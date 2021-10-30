const Category = require('./../models/category.models')

exports.get=async()=>{    
    try {
        const Categories=await Category.findAll()
        return Categories
    } catch (error) {
        throw error
    }
} 

exports.getOne=async(idcat)=>{    
    try {
        const Categories=await Category.findAll({where:{ idcat }})
        return Categories
    } catch (error) {
        throw error
    }
} 

exports.create = async ({ strdesccat,strnomcat }) => {
    try {
        const query = {strdesccat,strnomcat};
        const categorycreate = await Category.create(query)
        return "Se Creo con exito"
    } catch (error) {
        throw error
    }
}

exports.update = async ({idcat,strdesccat,strnomcat})=>{
    try {
        const query = {idcat}
        const update = {strdesccat,strnomcat}
        await Category.update(update,{where:query})
        return "Se Actualizo con exito"
    } catch (error) {
        throw error
    }        
}

exports.delete = async (idcat) =>{
    try {
        await Category.destroy({where:{idcat}})
        return "Se Elimino con exito"
    } catch (error) {
        throw error
    }    
}