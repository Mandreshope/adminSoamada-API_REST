const mongoose = require('mongoose')
let Schema = mongoose.Schema

let taskSchema = new Schema({
    nom: { type: String, default: '' },
    responsable: { type: Schema.ObjectId },
    priorite: { type: String, default: ''},
    statut: { type: String, default: 'Encours'},
    idProjet: { type: Schema.ObjectId, default: null, required: false},
    description: { type: String, default: '' },
    dateDebut: { type: Date, default: '' },
    dateFin: { type: Date, default:''},
    completeDate: { type: Date, default:''},
    dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true })

module.exports = mongoose.model('tache', taskSchema)