const req = require("express/lib/request")
const { makeid } = require("../../../util/Constants/roles")
const Ambassador_Program = require("../Model/ambassador-program");

module.exports = {
    createAmbassadorProgramService: function (req, res, next) {
        // console.log(makeid(10))
        console.log(req.body.ambassador_program)
        const ambassador_program = Ambassador_Program.create(req.body.ambassador_program)
            .then((result) => {
                res.json({
                    "status": "ok",
                    "msg": "Ambassador_program is created successfully"
                })
            }).catch((error) => {
                console.log(error)
            res.setStatus = 400
            res.json({
                "status": false,
                "msg": error.name
            })
            })
    },
    fetchAmbassadorProgramService: function (req, res, next) {
        const ambassador_programs = Ambassador_Program.findAll({
            where: {
                ambassador_id: req.body.params.ambassador_id,
                program_id: req.body.params.program_id
            }
        }).then((result) => {
            res.json(result)
        }).catch(error => {
            console.log(error)
            res.setStatus = 400
            res.json({
                "status": false,
                "msg": error.name
            })
        })
    },
    updateAmbassadorProgramService: function (req, res, next) {
        const ambassador_programs = Ambassador_Program.update(req.body.ambassador_program,
            {
                where:
                {
                    id: req.body.ambassador_program.id
                }
            }).then((result) => {
                res.json({
                    "status": "ok",
                    "msg": "Ambassador Program is updated successfully"
                })
            }).catch((error) => {
                console.log(error)
                res.setStatus = 400
                res.json({
                    "status": false,
                    "msg": error.name
                })
            })
    },
    deleteAmbassadorProgramService: function (req, res, next) {
        const ambassador_programs = Ambassador_Program.destroy({
            where:
            {
                id: req.body.ambassador_program.id
            }
        }).then((result) => {
            res.json({
                "status": "ok",
                "msg": "Ambassador Programs is deleted successfully"
            })
        }).catch((error) => {
            console.log(error)
            res.setStatus = 400
            res.json({
                "status": false,
                "msg": error.name
            })
        })
    }

}