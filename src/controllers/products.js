 const ProductsModel = require('../models/products')

async function get(req, res){
    
    const { id } = req.params

    const obj =  id ? {_id: id} : null

    const products = await ProductsModel.find(obj)
    
    res.send(products)
}

async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message:"sucesso"
    })
}

async function put(req, res){
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({_id:id}, req.body, {new:true})

    /*
    const product = await ProductsModel.findOne({_id:id})

    await product.updateOne(req.body)
    */
    res.send({
        message: "sucesso",
        product,
    })

}

async function dell(req, res){
    const {id} = req.params

    const dell = await ProductsModel.deleteOne({_id:id})

    const message = !dell.ok ? 'Sucesso' : 'Erro'

    res.send({
        message,
    })

}

module.exports = { 
    get,
    post,
    put,
    dell,
}