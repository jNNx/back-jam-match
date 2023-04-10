import { Router } from "express"
import personaRoutes from "./persona.js";
import userRoutes from "./user.js";

const apiRoutes = Router();

apiRoutes.use("/personas", personaRoutes);
apiRoutes.use("/users", userRoutes);

export default apiRoutes;