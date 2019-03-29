const mongoose = require('mongoose')
let Schema = mongoose.Schema

let TeamDetailsSchema = new Schema({
    nom: { type: String, default: '' },
    membres: [],
    description: { type: String, default: '' },
    dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true })

module.exports = mongoose.model('DetailsEquipe', TeamDetailsSchema)