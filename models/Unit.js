const mongoose = require('mongoose')

const unitSchema = mongoose.Schema({
    unitId: { type: String, require: true },
    nameUnit: { type: String },
    role: { type: String },
    power: { type: String },
})

module.exports = mongoose.model('Unit', unitSchema)