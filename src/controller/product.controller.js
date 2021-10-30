const productservices = require('./../services/product.services')

/**
 * getproduct: Trae todo los productos de la tabla 
 * router: /product
 * method: get
 */ 
exports.getproduct = async(req,res) =>{
    try {
        const products = await productservices.get()
        res.json(products)
    } catch (error) {
        res.send(error)
    }    
}
/**
 * getoneproduct: Trae un producto de la tabla por id de categorias
 * router: /product/one
 * method: get
 * @example
 * query:intidcat(int)
 */ 
exports.getoneproduct = async(req,res)=>{
    try {
        const productdata = req.query.intidcat
        const products = await productservices.getOne(productdata)  
        res.json(products)
    } catch (error) {
        res.send(error)
    }
}
/**
 * createproduct: Crea un producto 
 * router: /product
 * method: post
 * @example
 * body:idprod(str)
 *      strnomprod(str)
 *      intidcat(int)
 *      intuniprod(int)
 */
exports.createproduct = async(req,res)=>{
    try {
    const productdata = req.body
    const products = await productservices.create(productdata)
    res.json({products})
    } catch (error) {
        res.send(error)
    }    
}
/**
 * updateproduct: Actualiza un producto por id
 * router: /product/one
 * method: put
 * @example
 * query:idprod(str)
 * body:strnomprod(str)
 *      intidcat(int)
 *      intuniprod(int)
 */
exports.updateproduct = async(req,res)=>{
    try {
        const idprod = req.query.idprod
        const {strnomprod,intidcat,intuniprod}=req.body
        const productdata = {idprod,strnomprod, intidcat,intuniprod}
        const products = await productservices.update(productdata)
        res.json({products})
    } catch (error) {
        res.send(error)
    }    
}

exports.deleteproduct=async(req,res)=>{
    try {
        const productdata = req.query.idprod
        const products = await productservices.delete(productdata)
        res.json(products)
    } catch (error) {
        res.send(error)
    }
}