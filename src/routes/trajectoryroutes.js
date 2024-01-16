var router = require('express').Router();
const trajectoryController = require("../controllers/trajectorycontroller")
const validationController = require("../controllers/validationController")
module.exports = (app)=>{
    router.post('/addtrajectorypoints',[validationController.validateAddTrajectoryPoints,trajectoryController.addTrajectoryPoints]);
    router.get('/gettrajectorypoints',[trajectoryController.getTrajectoryPoints]);
    router.get('/getTrajectorybyid',[validationController.validateGetTrajectoryById,trajectoryController.getTrajectoryById]);
    app.use('/',router);
}