const mongoose = require('mongoose')
let Schema = mongoose.Schema

let projectSchema = new Schema({
    nom: { type: String, default: '' },
    chefDeProjet: { type: Schema.ObjectId },
    equipes: [{ type: Schema.ObjectId }],
    taches: [{ type: Schema.ObjectId }],
    description: { type: String, default: '' },
    developpement: { type: String, default: '' },
    statut: { type: String, default: '' },
    dateDebut: { type: Date, default:''},
    dateFin: { type: Date, default:''},
    completeDate: { type: Date, default:''},
    timeline: { type: Number, default: 0 },
    progression: { type: Number, default: 0 },
    dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true })

module.exports = mongoose.model('projet', projectSchema)
