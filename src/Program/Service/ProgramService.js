const sequelize = require("../../../util/database")
const { makeid } = require("../../../util/Constants/roles")
const Client = require("../../Client/Model/client")
const { sendMail1 } = require("../../util/sendMail")
const Program = require("../Model/program")

module.exports = {
    createProgramService: async function (req, res, next) {
        console.log("Here it is")
        req.body.program = JSON.parse(req.body.program)
        req.body.proram_img ="s3"
        console.log(req.body.program)
        const t = await sequelize.transaction();
        try {
            const program = await Program.create(req.body.program, {
                transaction: t
            })
            t.commit();
            res.json({
                program: req.body.program
            })
        } catch (e) {
            t.rollback();
            res.json("Error")
        }

    },
    updateProgramService: function(req,res,next){
        const program = Program.update(req.body.program,
            {
                where:
                    {
                        id: req.body.program.id
                    }
            }).then((result) => {
            res.json(req.body.program)
        }).catch((error) =>{
            console.log(error)
            res.json(error)
        })
    },
    deleteProgramService: function(req,res,next){
        const program = Program.destroy(
            {
                where:
                    {
                        id: req.body.program.id
                    }
            }).then((result) => {
            res.json(result)
        }).catch((error) =>{
            console.log(error)
            res.json(error)
        })
    }
}