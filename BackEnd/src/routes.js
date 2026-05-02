const express = require("express")

const routes = express.Router();

//usuario padrao
const users = [{
    id: 1,
    name: 'rafael',
    email: 'seijiarakaki12@gmail.com',
    password: '123456',
}]

routes.post("/login" , (req,res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password); //validador de usuariio com infos
    if (user){
        return res.status(200).json(user)
    }
    return res.status(401).json({ message: "Credencias inválidas"})
})

module.exports = routes;