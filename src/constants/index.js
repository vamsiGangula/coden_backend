const responseObj = (status = false, statusCode = "500", message = messages.SomethingWentWromg, isTokenExpired = false, data = {}) => {
    return { status, statusCode, message, isTokenExpired, data }
}
const errorMSG ={
    SomethingWentWrong : "Something went wrong",
    InvalidEmailId : "Invalid email address provided",
    invalidMobileNumber : "Invalid mobile number provided",
    userNotFound : "User not found",
    getSpecifiedUser : "Trajectory data fetched successfully"
}
const messages = {
    userAdded : " user added successfully",
    getTrajectories : "All Trajectories Fetched successfully",
}

module.exports = {responseObj ,errorMSG ,messages}