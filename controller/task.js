const task = require('../models/task')
module.exports = {
    create: function (req, res) {
        task.create(req.body).then((data) => {
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
        task.findByIdAndUpdate(req.query._id, {
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
        task.findByIdAndDelete(req.query._id).then(() => {
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
        task.find().then((data) => {
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
    getTask: function (req, res) {
        task.findById(req.query._id).then((data) => {
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
    getDetailsTask: function (req, res) {
        task.aggregate([
            {
                "$lookup": {
                    "from": "membres",
                    "localField": "responsable",
                    "foreignField": "_id",
                    "as": "responsableTache"
                }
            },
            {
                "$unwind": "$responsableTache"
             },
            {
               "$match": { "responsableTache": { $ne: [] } }
            },
            {
                "$lookup": {
                    "from": "projets",
                    "localField": "idProjet",
                    "foreignField": "_id",
                    "as": "projet"
                }
            },
            {
                "$unwind": "$projet"
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
                 error: error,
                 message: 'Erreur lors de récupération de données.'
             })
         })
        // task.findById(req.query._id).then((data) => {
        //     res.json({
        //         success: true,
        //         data: data,
        //         message: 'Récupération de donnée avec succès.'
        //     })
        // }).catch((error) => {
        //     res.json({
        //         success: false,
        //         error: error,
        //         message: 'Erreur lors de récupération de données.'
        //     })
        // })
    }
}