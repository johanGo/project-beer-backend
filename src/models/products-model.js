import {Sequelize, DataTypes} from 'sequelize'
import sequelize from '../db/connection.js'
export const Product = sequelize.define('Products',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    size:{
        type: DataTypes.SMALLINT,
        allowNull:false
    },
    stock:{
        type:DataTypes.SMALLINT,
        allowNull:false
    },
    img:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    valorU:{
        type:DataTypes.BIGINT,
        allowNull:false
    }
},{
    timestamps:false
})

// export default sequelize