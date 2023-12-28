import app from "./app.js";
import sequelize from './db/connection.js';
import './models/products-model.js'
import dotenv from 'dotenv';
dotenv.config()

app.get('/',(req,res)=>{
    res.send('app BEER iniciada')
})

app.use((req,res)=>{
    res.send('404 error')
})

// Verificar que la conexion se exitosa con sequelize
async function main(){
    try {
        await sequelize.sync()
        app.listen(process.env.PORT || 3000);
        console.log('Server listening on port', process.env.PORT || 3000)
        // await sequelize.authenticate();
        // console.log('conexion exitosa con sequelize')
    } catch (error) {
        console.error('Unable to connect to the database:', error);    
    }
}
main()


