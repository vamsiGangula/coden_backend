const {
  validations,
  validateHeaders,
  validateEmail,
  validateMobileNumber,
} = require("../utils/Utils");
const constants = require("../constants/index");

exports.validateAddTrajectoryPoints = async (req, res, next) => {
  let bodySchema = ["user_name", "user_email", "user_phone", "coordinates"];
  let headerSchema = ["userid"];
  validateHeaders(req.headers, headerSchema, (err, resp) => {
    if (err) {
      return res.json({ success: false, code: 400, message: err });
    } else {
      validations(req.body, bodySchema, (err, resp) => {
        if (err) {
          return res.json({ success: false, code: 400, message: err });
        } else {
          if (!validateEmail(req.body.user_email)) {
            res.json(
              response(false, 400, false, constants.errorMSG.InvalidEmailId)
            );
          }
          if (!validateMobileNumber(req.body.user_phone)) {
            res.json(
              response(
                false,
                400,
                false,
                constants.errorMSG.invalidMobileNumber
              )
            );
          }
          next();
        }
      });
    }
  });
};
exports.validateGetTrajectoryById = async (req, res, next) => {
  let schema = ["userid"];
  validateHeaders(req.headers, schema, (err, resp) => {
    if (err) {
      return res.json({ success: false, code: 400, message: err });
    } else {
      next();
    }
  });
};
