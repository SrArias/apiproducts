const transactionservices = require('./../services/transaction.services')

/**
 * gettransaction: trae todas las transacciones de la tabla
 * router: /transaction
 * method:get 
 */
exports.gettransaction = async(req,res) =>{
    try {
        const transactions = await transactionservices.get()
        res.json(transactions)
    } catch (error) {
        res.send(error)
    }    
}
/**
 * getonetransaction: trae una transaccione de la tabla por id
 * router: /transaction/one
 * method:get 
 * @example
 * query: idven(int)
 */
exports.getonetransaction = async(req,res) =>{
    try {
        const transactiondata = req.query.idven
        const transactions = await transactionservices.getOne(transactiondata)
        res.json(transactions)
    } catch (error) {
        res.send(error)
    }
}
/**
 * createtransaction: crea una transaccione
 * router: /transaction
 * method: post 
 * @example
 * body: intidcentro(int)
 *       stridprod(str)
 *       intcanven(int)
 *       strcomentven(str)
 */
exports.createtransaction = async(req,res) =>{
    try {
        const transactiondata = req.body
        const transactions = await transactionservices.create(transactiondata)
        res.json(transactions)
    } catch (error) {
        res.send(error)
    }
}
/**
 * updatetransaction: actualiza una transaccione por id
 * router: /transaction/one
 * method: put 
 * @example
 * query: idven(int)
 * body: intidcentro(int)
 *       stridprod(str)
 *       intcanven(int)
 *       strcomentven(str)
 */
exports.updatetransaction = async(req,res)=>{
    try {
        const idven = req.query.idven
        const {intidcentro,stridprod,intcanven,strcomentven} = req.body
        const transactiondata = {idven,intidcentro,stridprod,intcanven,strcomentven}
        const transactions = await transactionservices.update(transactiondata)
        res.json(transactions)
    } catch (error) {
        res.send(error)
    }
}

exports.deletetransaction = async(req,res)=>{
    try {
        const transactiondata=req.query.idven
        const transactions=await transactionservices.delete(transactiondata)
        res.json(transactions)
    } catch (error) {
        res.send(error)
    }
}