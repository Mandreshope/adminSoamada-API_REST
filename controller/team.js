const team = require('../models/team')
module.exports = {
    create: function (req, res) {
        team.create(req.body).then(() => {
            res.json({
                success: true,
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
        team.findByIdAndUpdate(req.query._id, {
            $set: req.body
        }).then(() => {
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
        team.findByIdAndDelete(req.query._id).then(() => {
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
        team.find().then((data) => {
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
    getTeam: function (req, res) {
        team.findById(req.query._id).then((data) => {
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
    getTeamDetails: function (req, res) {
        team.aggregate([
            {
                "$lookup": {
                    "from": "membres",
                    "localField": "membres",
                    "foreignField": "_id",
                    "as": "membres"
                }
            }
        ]).then((data) => {
            res.json({
                success: true,
                data: data,
                message: 'Récupération de donnée avec succès.'
            })
        }).catch((error) => {
            res.json({
                success: false,
                error: error.errmsg,
                message: 'Erreur lors de récupération de données.'
            })
        });
    }
}