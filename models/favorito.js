import { DataTypes } from "sequelize";
import db from "../db.js";

const Favorito = db.define("Favorito", {
    "id": {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    "user_fav": {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    "user_faveado": {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    timestamps: true,

});

export default Favorito;