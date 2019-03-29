const mongoose = require('mongoose')
let Schema = mongoose.Schema

let RecruitmentSchema = new Schema({
    nom: { type: String, default: '' },
    prenom: { type: String, default: '' },
    sexe: { type: String, default: '' },
    recruteur: { type: Schema.ObjectId },
    postulePour: { type: String, default: '' },
    cv: { type: String, default: '' },
    interview: { type: String, default: '' },
    note: { type: Number, default: '' },
    qualite: { type: Number, default: 0 },
    tel: { type: String, default: '' },
    mail: { type: String, default: '' },
    profileRS: { type: String, default: '' },
    avatar: { type: String, default: '/assets/user.jpg'},
    dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true })

module.exports = mongoose.model('recrutement', RecruitmentSchema)