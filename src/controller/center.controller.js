const centerservices = require('./../services/center.services')
/**
 * getcenter:trae todos los centros de la tabla
 * router:/center
 * method:get 
 */
exports.getcenter = async(req,res) =>{
    try {
        const centers = await centerservices.get()
        res.json(centers)
    } catch (error) {
        res.send(error)
    }    
}
/**
 * getonecenter:trae un centro de la tabla por id
 * router:/center/one
 * method:get 
 * @example
 * query:idcen(int)
 */
exports.getonecenter = async(req,res)=>{
    try {
        const centerdata = req.query.idcen
        const centers=await centerservices.getOne(centerdata)
        res.json(centers)
    } catch (error) {
        res.send(error)
    }
}
/**
 * createcenter:crea un centro 
 * router:/center
 * method:post 
 * @example
 * body:strnomcen(str)
 *      strdepartamento(str)
 *      strciudad(str)
 *      strdirección(str)
 *      strtelefono(str)
 */
exports.createcenter = async(req,res)=>{
    try {
        const centerdata = req.body
        const centers = await centerservices.create(centerdata)
        res.json(centers)
    } catch (error) {
        res.send(error)
    }
}
/**
 * updatecenter:actualiza un centro 
 * router:/center
 * method:post 
 * @example
 * query:idcem(int)
 * body:strnomcen(str)
 *      strdepartamento(str)
 *      strciudad(str)
 *      strdirección(str)
 *      strtelefono(str)
 */
exports.updatecenter = async(req,res)=>{
    try {
        const idcen = req.query.idcen
        const {strnomcen,strdepartamento,strciudad,strdireccion,strtelefono} = req.body
        const centerdata = {idcen,strnomcen,strdepartamento,strciudad,strdireccion,strtelefono}
        const centers = await centerservices.update(centerdata)
        res.json(centers)
    } catch (error) {
        res.send(error)
    }
}

exports.deletecenter = async (req,res)=>{
    try {
        const centerdata = req.query.idcen
        const centers = await centerservices.delete(centerdata)
        res.json(centers)
    } catch (error) {
        res.send(error)
    }
}