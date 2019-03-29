const teamDetails = require('../models/teamDetails')
const team = require('../models/team')
module.exports = {
    
    create: function (req, res) {
        team.aggregate(
            [
                {
                    "$lookup": {
                        "from": "membres",
                        "localField": "membres",
                        "foreignField": "_id",
                        "as": "membres"
                    }
                }
            ]).then((datas) => {
                teamDetails.create(datas).then(() => {
                    console.log('team details created.')
                    res.json({
                        success: true,
                        message: 'Création de données avec succès.'
                    })
                }).catch((error) => {
                    res.json({
                        success: false,
                        error: error.errmsg,
                        message: 'Erreur lors de création de données.'
                    })
                    console.log(error.errmsg)
                });
            });
    },
    update: function (req, res) {
        teamDetails.findByIdAndUpdate(req.query._id, {
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
    drop: function (req, res) {
        teamDetails.db.dropCollection("detailsequipes").then(() => {
            res.json({
                success: true,
                message: 'Suppression de collection avec succès.'
            })
        }).catch((error) => {
            res.json({
                success: false,
                error: error,
                message: 'Erreur lors de suppression de collection.'
            })
        })
    },
    delete: function (req, res) {
        teamDetails.findByIdAndDelete(req.query._id).then(() => {
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
        teamDetails.find().then((data) => {
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
    getTeamDetail: function (req, res) {
        teamDetails.findById(req.query._id).then((data) => {
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