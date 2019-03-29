const project = require('../models/project')
const team = require('../models/team')
const teamDetails = require('../models/teamDetails')
module.exports = {
    create: function (req, res) {
        project.create(req.body).then(() => {
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
        project.findByIdAndUpdate(req.query._id, {
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
        project.findByIdAndDelete(req.query._id).then(() => {
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
        project.find().then((data) => {
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
    getProject: function (req, res) {
        project.findById(req.query._id).then((data) => {
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
    getProjectDetails: function (req, res) {
        team.aggregate([
            {
                "$lookup": {
                    "from": "membres",
                    "localField": "membres",
                    "foreignField": "_id",
                    "as": "membres"
                }
            }
        ]).then((datas) => {
            varteamDetails = datas
            teamDetails.create(datas).then(() => {
                console.log('team details created.')
                project.aggregate([
                    {
                        "$lookup": {
                            "from": "membres",
                            "localField": "chefDeProjet",
                            "foreignField": "_id",
                            "as": "chefDeProjet"
                        }
                    },
                    {
                        "$unwind": "$chefDeProjet"
                    },
                    {
                        "$match": { "chefDeProjet": { $ne: [] } }
                    },
                    {
                        "$lookup": {
                            "from": "detailsequipes",
                            "localField": "equipes",
                            "foreignField": "_id",
                            "as": "equipes"
                        }
                    },
                    {
                        "$lookup": {
                            "from": "taches",
                            "localField": "taches",
                            "foreignField": "_id",
                            "as": "taches"
                        }
                    }
                ]).then((data) => {
                    res.json({
                        success: true,
                        data: data,
                        message: 'Récupération de donnée avec succès.'
                    })
                    // console.log(res)

                }).catch((error) => {
                    res.json({
                        success: false,
                        error: error,
                        message: 'Erreur lors de récupération de données.'
                    })
                });
            }).catch((error) => {
                console.log(error.errmsg)
            });
        }).catch((error) => {
            console.log(error.errmsg)
        });

    }

}