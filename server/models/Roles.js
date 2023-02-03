const {Schema, model} = require('mongoose')

const Role = new Schema({
    value: {type: String, required: true, default:"Сотрудник"},
})

module.exports = model('Role', Role)