import { Router } from "express";
import {
    createPersona,
    updatePersona
} from "../controllers/persona.js";

const personaRoutes = Router();

personaRoutes.post("/", createPersona);
personaRoutes.put("/:personaId", updatePersona);

export default personaRoutes;