const mongoose = require('mongoose')
let Schema = mongoose.Schema

let TeamSchema = new Schema({
    nom: { type: String, default: '' },
    membres: [{ type: Schema.ObjectId }],
    description: { type: String, default: '' },
    dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true })

module.exports = mongoose.model('equipe', TeamSchema)