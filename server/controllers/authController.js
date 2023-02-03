const User = require('../models/User')
const Role = require('../models/Roles')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require("../config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Ошибка при регистрации', errors})
            }
            const {email, password} = req.body
            const checkEmail = await User.findOne({email})
            if (checkEmail) {
                return res.status(400).json({message: 'Пользователь с такой почтой уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value:'Сотрудник'})
            const user = new User({email, password: hashPassword, roles:[userRole.value]})
            await user.save()
            return res.json({message:'Пользователь зарегистрирован'})
        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка регистрации'})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user){
                res.status(400).json({message:`Пользователь ${email} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                res.status(400).json({message:`Пароль неверный`})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка авторизации'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch(e) {

        }
    }
}

module.exports = new authController()