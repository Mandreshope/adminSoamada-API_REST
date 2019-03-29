const mongoose = require('mongoose')
let Schema = mongoose.Schema

let CustomerSchema = new Schema({
    nom: { type: String, default: '' },
    prenom: { type: String, default: '' },
    sexe: { type: String, default: '' },
    tel: { type: String, default: '' },
    mail: { type: String, default: '' },
    adresse: { type: String, default: '' },
    type: { type: String, default: '' },
    tailleIdeal: { type: Number, default: 0 },
    probaCloture: { type: Number, default: '' },
    montant: { type: String, default: '' },
    qualite: { type: Number, default: '' },
    avatar: { type: String, default: '/assets/user.jpg'},
    dateCreation: { type: Date, default: Date.now, required: false }
}, { _id: true })

module.exports = mongoose.model('client', CustomerSchema)