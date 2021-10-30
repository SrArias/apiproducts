const product = require('./../models/product.models')

exports.get = async () => {
    try {
        const products = await product.findAll()
        return products
    } catch (error) {
        throw error
    }
}

exports.getOne = async (intidcat) => {
    try {        
        const products = await product.findAll({ where: { intidcat } })
        return products
    } catch (error) {
        throw error
    }
}

exports.create = async ({ idprod,strnomprod, intidcat,intuniprod }) => {
    try {
        if (await product.findOne({where:{idprod}})!=null) {
            return "Ya hay un producto registrado con esta ID"
        }
        else{
            const query = {idprod,strnomprod, intidcat,intuniprod};
            const productcreate = await product.create(query)
            return productcreate
        }
    } catch (error) {
        throw error
    }
}

exports.update = async ({idprod,strnomprod,intidcat,intuniprod})=>{
    try {
        const query = {idprod}
        const update = {strnomprod, intidcat,intuniprod}
        await product.update(update,{where:query})
        return "Se Actualizo con exito"
    } catch (error) {
        throw error
    }    
}

exports.delete=async(idprod)=>{
    try {
        await product.destroy({where:{idprod}})
        return "Se elimino con exito"
    } catch (error) {
        throw error
    }
}
