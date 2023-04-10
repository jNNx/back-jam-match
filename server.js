import express from "express"
import config from "./config.js";
import db from "./db.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

db.sync({ }).then(() => {
    app.listen(config.SERVER_PORT, ()=> {
        console.log("Servidor andando")
    });
}).catch((error) => {
    console.log("Error al conectar a la bd", error)
})