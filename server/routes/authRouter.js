const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const {check} = require('express-validator')
const authMiddleware =require('../middlewares/authMiddleware')
const roleMiddleware =require('../middlewares/roleMiddleware')

router.post('/registration', [
    check('email', "Введите верную почту").isEmail(),
    check('password', "Пароль должен быть больше 4 и меньше 15 символов").isLength({min:4, max:15})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['Администратор']), controller.getUsers)

module.exports = router