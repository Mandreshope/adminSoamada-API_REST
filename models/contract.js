const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ContractSchema = new Schema({
    refContrat: { type: String, default: '' },
    client: { type: Schema.ObjectId },
    nomProjet: { type: String, default: '' },
    equipes: [{ type: Schema.ObjectId }],
    dateContact: { type: Date, default: '' },
    statut: { type: String, default: '' },
    dernierContact: { type: Date, default: '' },
    dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true })

module.exports = mongoose.model('contrat', ContractSchema)