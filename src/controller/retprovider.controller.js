const retproviderservices = require('../services/retprovider.services')

/**
 * getretprovider: trae todas las devoluciones de productos
 * router: /retprov 
 * method: get
 */
exports.getretprovider = async(req,res) =>{
    try {
        const retproviders = await retproviderservices.get()
        res.json(retproviders)
    } catch (error) {
        res.send(error)
    }    
}
/**
 * getoneretprovider: trae una devolucione de producto por id
 * router: /retprov/one 
 * method: get
 * @example
 * query: iddep(int)
 */
exports.getoneretprovider = async(req,res)=>{
    try {
        const retproviderdata = req.query.iddep
        const retproviders = await retproviderservices.getOne(retproviderdata)
        res.json(retproviders)
    } catch (error) {
        res.send(error)
    }
}
/**
 * createretprovider: trae una devolucione de producto por id
 * router: /retprov/one 
 * method: post
 * @example
 * body: stridprod(str)
 *       intcandep(int)
 *       strcomendep(str)
 */
exports.createretprovider = async(req,res)=>{
    try {
        const retproviderdata = req.body
        const retproviders = await retproviderservices.create(retproviderdata)
        res.json(retproviders)
    } catch (error) {
        res.send(error)
    }
}
/**
 * createretprovider: trae una devolucione de producto por id
 * router: /retprov/one 
 * method: put
 * @example
 * query: iddep(int) 
 * body: stridprod(str)
 *       intcandep(int)
 *       strcomendep(str)
 */
exports.updateretprovider = async(req,res)=>{
    try {
        const iddep = req.query.iddep
        const {stridprod,intcandep,strcomendep}=req.body
        const retproviderdata = {iddep,stridprod,intcandep,strcomendep}
        const retproviders = await retproviderservices.update(retproviderdata)
        res.json(retproviders)
    } catch (error) {
        res.send(error)
    }
}

exports.deleteretprovider=async(req,res)=>{
    try {
        const retproviderdata = req.query.iddep
        const retproviders = await retproviderservices.delete(retproviderdata)
        res.json(retproviders)
    } catch (error) {
        res.send(error)
    }
}
