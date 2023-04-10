import personaRepository from "../repositories/persona.js";

export const createPersona = async (req, res) => {
    try {
        const persona = await personaRepository.createPersona(req.body);
        res.json({ persona });
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

export const updatePersona = async (req, res) => {
    try {
      const persona = await personaRepository.updatePersona(req.body, req.params.personaId);
  
      res.json({ persona })
    } 
    catch (error) {
      res.status(500).json({ error });
    }
}