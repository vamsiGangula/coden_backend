const constants = require("../constants");
let trajectoryModel = require("../models/trajectory");
exports.addTrajectoryPoints = async(req, res)=> {
  try {
    const reqBody = req.body;
    const userId = req.headers.userid;  // Assuming 'userid' is the correct header key
    const trajectoryData = {
      ...reqBody,
      userId: userId,
    };
    await trajectoryModel
      .create(trajectoryData)
      .then((result) => {
        console.log(result,"=====result");
        return res.json({
            result: constants.responseObj(
              true,
              200,
              constants.messages.userAdded,
              false,
              result
            ),
          });
      })
      .catch((error) => {
        console.log(error,"===error ===")
        return res.json({
          result: constants.responseObj(
            false,
            500,
            constants.errorMSG.SomethingWentWrong,
            false,
            error
          ),
        });
      });
  } catch (err) {
    return res.json({
      result: constants.responseObj(
        false,
        500,
        constants.errorMSG.SomethingWentWrong,
        false,
        err
      ),
    });
  }
};
exports.getTrajectoryPoints = async(req,res)=>{
try{
    await trajectoryModel.find({}).then((trajectory)=>{
        console.log(trajectory,"======trajectory===>")
        return res.json({
            result: constants.responseObj(
              true,
              200,
              constants.messages.getTrajectories,
              false,
              trajectory
            ),
          });
    }).catch((err)=>{
        return res.json({
            result: constants.responseObj(
              false,
              500,
              constants.errorMSG.SomethingWentWrong,
              false,
              err
            ),
          });
    });

}
catch (err) {
    return res.json({
      result: constants.responseObj(
        false,
        500,
        constants.errorMSG.SomethingWentWrong,
        false,
        err
      ),
    });
  }
}; 
exports.getTrajectoryById =  async (req,res)=>{
    try{
        let userId = req.headers.userid;
        await trajectoryModel.findOne({userId :userId }).then((trajectory)=>{
            if(trajectory){
                return res.json({
                    result: constants.responseObj(
                      true,
                      200,
                      constants.messages.getSpecifiedUser,
                      false,
                      trajectory
                    ),
                  });
            }else{
                return res.json({
                    result: constants.responseObj(
                      false,
                      204,
                      constants.errorMSG.userNotFound,
                    ),
                  });
            }
        }).catch((error)=>{
            return res.json({
                result: constants.responseObj(
                  false,
                  500,
                  constants.errorMSG.SomethingWentWrong,
                  false,
                  error
                ),
              });
        });

    }catch (err) {
        return res.json({
          result: constants.responseObj(
            false,
            500,
            constants.errorMSG.SomethingWentWrong,
            false,
            err
          ),
        });
      }
}