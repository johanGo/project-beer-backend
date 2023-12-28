import { Product } from "../models/products-model.js"

export const getProducts = async(req, res)=>{

    try {
        const result = await Product.findAll()
        res.status(200).json({
            message : 'Operacion exitosa al traer todos los productos',
            data : result
        })
        // res.send('obteniendo productos')
        console.log('operacion exitosa')
    } catch (error) {
        res.status(500).res.json({
            message: 'Fallo al momento de traer los datos de los productos',
            error : error.message
        })
    }
    

}


export const createProducts = async(req, res)=>{
    const {name, description,size ,stock, img} = req.body;
    try {
        const result = await Product.create({
            name : name,
            description : description,
            size: size,
            stock: stock,
            img: img
        })
        res.status(201).json({
            message : 'Operacion exitosa al crear el producto',
            data : result
        })
        
        // res.send('creating products')
    } catch (error) {
        res.status(500).json({
            message: `Fallo al momento de insertar los datos del producto: ${name}`,
            error : error.message
        })
        console.log('Fallo al momento de insertar los datos del producto: '+ name)
    }
}

export const updateProduct = async(req, res)=>{
    try {
        const {name, description,size ,stock, img} = req.body;
        const {id} = req.params;
        const prod = await Product.findByPk(id)
        prod.name = name,
        prod.description = description,
        prod.size = size,
        prod.stock = stock,
        prod.img = img
        await prod.save()
        
        res.json({
            message : 'El producto: '+name+ ' fue actualizado',
            data : prod
        });
    } catch (error) {
        res.status(500).json({
            message:'Error al actualizar  el producto',
            error : error.message
        })
    }
    
}

export const deleteProduct= async (req, res)=>{
    try {
        const {id} = req.params;
        await Product.destroy({
            where:{
                id : id
            }
        })
        res.json({
            message : 'El producto con ID: ' +id + ' fue eliminado'
        })
    } catch (error) {
        res.status(500).json({
            message:'Error al eliminar el producto',
            error : error.message
        })
    }
}

export const getOneProduct = async (req, res)=>{
    try {        
        const {id} = req.params
        const result = await Product.findOne({where : {id : id}})
        if(result == null){
            res.status(404).json({
                message:'No se encontro el producto con ese ID'
            })
        }else{
            res.json(result)
        }
    } catch (error) {
        res.status(500).json({
            message:'No se pudo traer el producto',
            error : error.message
        })
    }
}