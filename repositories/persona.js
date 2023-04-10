import Persona from "../models/persona.js";

const createPersona = async (personaData) => {
    try {
        const persona = await Persona.create(personaData);
        return persona;
    } 
    catch (error) {
        return error;
    }
};


const updatePersona = async (personaData, personaId) => {
    try {
        await Persona.update(personaData, {
            where: {
                id: personaId,
            },
        });
        const persona = await Persona.findByPk(personaId);
        return persona;
    }
    catch(error) {
        return error;
    }
};

export default {
    createPersona,
    updatePersona
};