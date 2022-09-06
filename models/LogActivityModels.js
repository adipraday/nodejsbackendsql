import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const LogActivity = db.define('logactivity',{
    id_user:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    id_description:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default LogActivity;