// const jwt = require("jsonwebtoken");
// const userModel = require("../models/user-model");


// module.exports.isLoggedin = async function (req, res, next) {
//     if (!req.cookies.token) {
//         req.flash("error", "You are not logged in, please login first")
//         res.redirect("/")
//     }


//     try {
//         let decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
//         let user = await userModel.findOne({ email: decoded.email }).select("-password")
//         req.user = user;
//         next();
//     } catch (err) {
//         req.flash("error", "You are not logged in, please login first")
//         res.redirect("/")
//     }
// }