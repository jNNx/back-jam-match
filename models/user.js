import { DataTypes } from "sequelize";
import db from "../db.js";
import Persona from "./persona.js";

const User = db.define("User", {
    "id": {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    "username": {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
       len: {
        args: [3, 50],
        msg: "No es un nombre valido"
       }
      }
    },
    "password": DataTypes.STRING,
    "descripcion": DataTypes.STRING,
    "miembros": {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    "instrumento": {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    "admin": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
  })

User.Persona = User.belongsTo(Persona);
Persona.User = Persona.hasOne(User);

export default User;