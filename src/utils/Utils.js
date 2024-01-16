validations = (requestData, schema, cb) => {
  let keys = Object.keys(requestData);
  console.log("---validations");
  let temp_array = [];
  for (var i in schema) {
    if (
      !keys.includes(schema[i]) ||
      requestData[schema[i]] == null ||
      requestData[schema[i]] == undefined
    ) {
      temp_array.push(schema[i].toUpperCase().replace(/_/g, " "));
    }
  }
  if (temp_array.length > 0) {
    let adverb = temp_array.length > 1 ? " are" : " is";
    let message = temp_array + adverb + " missing";
    cb(message);
  } else cb(null, true);
};
validateHeaders = (requestData, schema, cb) => {
  let keys = Object.keys(requestData);
  console.log(keys, "keys");
  let temp_array = [];
  for (var i in schema) {
    if (
      !keys.includes(schema[i]) ||
      requestData[schema[i]] == null ||
      requestData[schema[i]] == undefined
    )
      temp_array.push(schema[i].toUpperCase().replace(/_/g, " "));
  }
  if (temp_array.length > 0) {
    let adverb = temp_array.length > 1 ? " are" : " is";
    let message = temp_array + adverb + " missing";
    cb(message);
  } else cb(null, true);
};
function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}
function validateMobileNumber(input) {
  var pattern = /^[0-9]{10}$/;
  return pattern.test(input);
}
module.exports = {
  validations,
  validateHeaders,
  validateEmail,
  validateMobileNumber,
};
