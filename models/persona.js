import { DataTypes } from "sequelize"
import db from "../db.js";

const Persona = db.define("Persona", 
{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [3, 25],
                msg: "No es un nombre valido",
            },
        },
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [3, 25],
                msg: "No es un apellido valido",
            },
        },
    },
    edad: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "No es un email valido",
            },
        },
    },
    tipo_persona: DataTypes.INTEGER,
    pais: DataTypes.STRING,
    provincia: DataTypes.STRING,
    localidad: DataTypes.STRING,
})

export default Persona;