const Client = require("../../Client/Model/client")
const Program_Package = require("../Model/program-package")

module.exports = {
    createPackageService: function(req,res,next){
        console.log(req.body.package)
        const pacakge = Program_Package.create(req.body.package)
        .then((result) => {
            res.json(result)
        }).catch((error) =>{
            res.json(error)
        })
    },
    getPackageClients: async function(req,res,next){
        const packages = await Program_Package.findAll({ attributes: ['title','description'] })
        const clients = await Client.findAll({ attributes: ['first_name','last_name', 'email']})

        res.json({
            "packages": packages,
            "clients": clients
        })

    },
    fetchAllPackages: function(req,res,next){
        const packages = Program_Package.findAll()
        .then((result) =>{
            res.json(result)
        }).catch((error) => {
            res.json(error)
        })
    },
    updatePackageService: function(req,res,next){
        const package = Program_Package.update(req.body.package,
            {
                where:
                    {
                        id: req.body.package.id
                    }
            }).then((result) => {
            res.json(req.body.package)
        }).catch((error) =>{
            console.log(error)
            res.json(error)
        })
    }
}