import express  from "express";
import productsRoutes from './routes/products-routes.js'
import cors from 'cors'
const app = express();

app.use(express.json())

app.use(productsRoutes)

app.use(cors())

export default app;