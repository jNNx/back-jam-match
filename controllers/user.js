import userRepository from "../repositories/user.js";

export const getAllUsers = async (req, res) => {
    const user = await userRepository.getAllUsers();
    res.status(200).json({ user });
};

export const getUserById = async (req, res) => {
    const user = await userRepository.getUserById(req.params.userId);
    res.json({ user });
}

export const createUser = async (req, res) => {
    try {
        const user = await userRepository.createUser(req.body);
        res.json({ user });
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

export const deleteUser = async (req, res) => {
    try {

        const user = userRepository.deleteUser(req.params.userId)
        res.json({ user });
    } 
    catch (error) {
        res.status(500).json({ error })
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await userRepository.updateUser(req.body, req.params.userId);
        res.json({ user })
    } 
    catch (error) {
        res.status(500).json({ error });
    }
}