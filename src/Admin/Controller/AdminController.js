const express = require('express');
const { createPackageService, fetchAllPackages, updatePackageService, getPackageClients } = require('../../Program-Package/Service/ProgramPackageService');
const { createProgramService, updateProgramService, deleteProgramService } = require('../../Program/Service/ProgramService');
const { verifyTokenAdmin, verifyTokenSuperAdmin, verifyTokenClient } = require('../../validate');
const { createAdminService, updateAdminService, fetchAdminService, countUsers, deleteAdminService } = require('../Service/AdminService');
var router = express.Router();

router.get('/getAll', verifyTokenSuperAdmin, function(req,res,next){
    fetchAdminService(req,res,next)
})
router.post('/create' , function(req,res,next){
    console.log("Admin Here")
    createAdminService(req,res,next)
})

router.post('/update', verifyTokenSuperAdmin, function(req,res,next){
    console.log("Update")
    updateAdminService(req,res,next)
})

router.delete('/delete', verifyTokenSuperAdmin, function(req,res,next){
    console.log("Update")
    deleteAdminService(req,res,next)
})

router.post('/package/create',verifyTokenAdmin, function(req,res,next){
    createPackageService(req,res,next)
})

router.get('/package-client',verifyTokenClient, function(req,res,next){
    getPackageClients(req,res,next)
})

router.get('/package/all',verifyTokenAdmin,function(req,res,next){
    fetchAllPackages(req,res,next)
})

router.put('/package/update', verifyTokenAdmin,function(req,res,next){
    updatePackageService(req,res,next)
})

router.post('/program/create', verifyTokenAdmin,function(req,res,next){
    console.log("Here")
    createProgramService(req,res,next)
})

router.put('/program/update', verifyTokenAdmin, function(req,res,next){
    updateProgramService(req,res,next)
})

router.delete('/program/delete', verifyTokenSuperAdmin, function(req,res,next){
    console.log("Here")
    deleteProgramService(req,res,next)
})

router.get('/getCount',verifyTokenSuperAdmin, function(req,res,next){
    countUsers(req,res,next)
})

module.exports = router