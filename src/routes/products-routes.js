import  {Router}  from "express";
const router = Router();
import { createProducts, getProducts, updateProduct, deleteProduct, getOneProduct} from "../controllers/products-controller.js";

router.get('/api', getProducts)
router.post('/api', createProducts)
router.put('/api/:id', updateProduct)
router.delete('/api/:id', deleteProduct)
router.get('/api/:id', getOneProduct)


export default router;