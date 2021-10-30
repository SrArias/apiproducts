const ingressservices = require('./../services/ingress.services')

/**
 * getingress: Trae todo los ingresos de la tabla 
 * router: /ingress
 * method: get
 */ 
exports.getingress = async(req,res) =>{
    try {
        const ingresses = await ingressservices.get()
        res.json(ingresses)
    } catch (error) {
       res.send(error) 
    }    
}
/**
 * getoneingress: Trae un ingreso por id 
 * router: /ingress/one
 * method: get
 * @example
 * query:iding(int)
 */ 
exports.getoningress = async(req,res)=>{
    try {
        const ingressdata = req.query.iding
        const ingresses = await ingressservices.getOne(ingressdata)
        res.json(ingresses)
    } catch (error) {
        res.send(error)
    }
}
/**
 * createingress: crea un ingreso 
 * router: /ingress
 * method: post
 * @example
 * body:stridprod(str)
 *       intcanting(int)
 */
exports.createingress = async(req,res)=>{
    try {
        const ingressdata = req.body
        const ingresses = await ingressservices.create(ingressdata)
        res.json(ingresses)
    } catch (error) {
        res.send(error)
    }
}
/**
 * updateingress: actualiza un ingreso 
 * router: /ingress/one
 * method: post
 * @example
 * query:iding(int)
 * body:stridprod(str)
 *       intcanting(int)
 */
exports.updateingress = async(req,res)=>{
    try {
        const iding = req.query.iding        
        const {stridprod,intcanting} = req.body
        const ingressdata = {iding,stridprod,intcanting}
        const ingresses = await ingressservices.update(ingressdata)
        res.json(ingresses)
    } catch (error) {
        res.send(error)
    }
}

exports.deleteingress=async(req,res)=>{
    try {
        const ingressdata = req.query.iding
        const ingresses = await ingressservices.delete(ingressdata)
        res.json(ingresses)
    } catch (error) {
        res.send(error)
    }
}