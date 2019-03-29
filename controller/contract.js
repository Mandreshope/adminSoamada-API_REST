const contract = require('../models/contract')
const team = require('../models/team')
const teamDetails = require('../models/teamDetails')
module.exports = {
    create: function (req, res) {
        contract.create(req.body).then(() => {
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
        contract.findByIdAndUpdate(req.query._id, {
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
        contract.findByIdAndDelete(req.query._id).then(() => {
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
        contract.find().then((data) => {
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
    getContract: function (req, res) {
        contract.findById(req.query._id).then((data) => {
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
    getContractDetails: function (req, res) {
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
                contract.aggregate([
                    {
                        "$lookup": {
                            "from": "clients",
                            "localField": "client",
                            "foreignField": "_id",
                            "as": "client"
                        }
                    },
                    {
                        "$unwind": "$client"
                    },
                    {
                        "$lookup": {
                            "from": "detailsequipes",
                            "localField": "equipes",
                            "foreignField": "_id",
                            "as": "equipes"
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