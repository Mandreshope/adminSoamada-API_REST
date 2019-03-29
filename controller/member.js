const member = require('../models/member')
module.exports = {
    create: function (req, res) {
        member.create(req.body).then((data) => {
            res.json({
                success: true,
                data: data,
                message: 'Création de données avec succès.'
            })
        }).catch((error) => {
            res.json({
                success: false,
                error: error,
                message: 'Erreur lors de création de données.'
            })
        })
    },
    update: function (req, res) {
        console.log('update member')
        member.findByIdAndUpdate(req.query._id, {
            $set: req.body
        }).then(() => {
            console.log('update member terminé')
            res.json({
                success: true,
                message: 'Mise à jour de données avec succès.'
            })
        }).catch((error) => {
            res.json({
                success: false,
                error: error,
                message: 'Erreur lors de mise à jour de données.'
            })
        })
    },
    delete: function (req, res) {
        member.findByIdAndDelete(req.query._id).then(() => {
            res.json({
                success: true,
                message: 'Suppression de données avec succès.'
            })
        }).catch((error) => {
            res.json({
                success: false,
                error: error,
                message: 'Erreur lors de suppression de données.'
            })
        })
    },
    read: function (req, res) {
        member.find().then((data) => {
            res.json({
                success: true,
                data: data,
                message: 'Récupération de donnée avec succès.'
            })
        }).catch((error) => {
            res.json({
                success: false,
                error: error,
                message: 'Erreur lors de récupération de données.'
            })
        })
    },
    auth: function (req, res) {
        member.findOne({
            $and: [{ mail: req.body.mail }, { mdp: req.body.mdp }],
        }).then((data) => {
            if (data) {
                res.json({
                    success: true,
                    data: data
                })

            }else {
                throw new Error()
            }

        }).catch((error) => {
            res.json({
                success: false,
                error: error,
                message: 'Identifiant et/ou mot de passe incorrect'
            })
        })
    },
    getMember: function (req, res) {
        member.findById(req.query._id).then((data) => {
            res.json({
                success: true,
                data: data,
                message: 'Récupération de donnée avec succès.'
            })
        }).catch((error) => {
            res.json({
                success: false,
                error: error,
                message: 'Erreur lors de récupération de données.'
            })
        })
    }
}