const mongoose = require('mongoose')
let Schema = mongoose.Schema

let MemberSchema = new Schema({
  nom: {type: String, default: ''},
  prenom: {type: String, default: ''},
  dateDeNaissance: {type: Date, default: 0},
  sexe: {type: String, default: ''},
  cin: {type: String, default: 0},
  pere: {type: String, default: ''},
  mere: {type: String, default: ''},
  adresse: {type: String, default: ''},
  numMatricule: { type: Number, default: 0},
  tel: {type: String, default: ''},
  mail: {type: String, default: ''},
  mdp: {type: String, default: ''},
  observant: { type: Number, default: 0},
  role: { type: String, default: 'simple user'},
  avatar: { type: String, default: '/assets/user.jpg'},
  dateInsertion: { type: Date, default: Date.now, required: false }
}, { _id: true})
 
module.exports = mongoose.model('membre', MemberSchema)