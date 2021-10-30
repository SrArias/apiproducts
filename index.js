const mysql = require('./src/connections/connectiondb')

const productroutes = require('./src/routes/product.routes')
const categoryroutes = require('./src/routes/category.routes')
const ingressroutes = require('./src/routes/ingress.routes')
const retproviderroutes = require('./src/routes/retprovider.routes')
const centerroutes = require('./src/routes/center.routes')
const transactionroutes = require('./src/routes/transaction.routes')
const cors=require('cors')

const express = require('express')

const app = express()
app.set('port',3000)

app.use(cors())
app.use(express.json())


app.use('/product',productroutes)
app.use('/category',categoryroutes)
app.use('/ingress',ingressroutes)
app.use('/retprov',retproviderroutes)
app.use('/center',centerroutes)
app.use('/transaction',transactionroutes)

app.listen(app.get('port'),()=>{
    console.log('listen on port',app.get('port'))
})