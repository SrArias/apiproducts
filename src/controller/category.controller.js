const categoryservices = require('./../services/category.services')
/**
 * getcategory: trae todas las categorias de la tabla
 * router:/category
 * method:get
 */
exports.getcategory = async(req,res) =>{
    try {
        const Categories = await categoryservices.get()
        res.json(Categories)
    } catch (error) {
        res.send(error)
    }    
}
/**
 * getcategory: trae una categorias de la tabla por id
 * router:/category/one
 * method:get
 * @example
 * query:idcat(int)
 */
exports.getonecategory = async(req,res) =>{
    try {
        const categorydata = req.query.idcat
        const category = await categoryservices.getOne(categorydata)  
        res.json(category)        
    } catch (error) {
        res.send(error)
    }
}
/**
 * createcategory: crea una categoria 
 * router:/category
 * method:post
 * @example
 * body:strdesccat(str)
 *      strnomcat(str)
 */
exports.createcategory = async(req,res)=>{
    try {
       const categorydata = req.body
       const category = await categoryservices.create(categorydata)
       res.json(category) 
    } catch (error) {
        res.send(error)
    }
}
/**
 * updatecategory: actualiza una categoria
 * router:/category/one
 * method:put
 * @example
 * body:strdesccat(str)
 *      strnomcat(str)
 */
exports.updatecategory = async(req,res)=>{
    try {
        const idcat = req.query.idcat
        const {strdesccat,strnomcat}=req.body
        const categorydata = {idcat,strdesccat,strnomcat}
        const categories = await categoryservices.update(categorydata)
        res.json({categories})
    } catch (error) {
        res.send(error)
    }   
}

exports.deletecategory = async (req,res)=>{
    try {
        const categorydata = req.query.idcat
        const categories = await categoryservices.delete(categorydata )
        res.json({categories}) 
    } catch (error) {
        res.send(error)
    }    
}