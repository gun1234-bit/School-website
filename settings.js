const nodemailer = require("nodemailer")

module.exports = {
    sender: "achiever2704@gmail.com",
    transporter: nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "achiever2704@gmail.com",
            pass: "8341655595"
        }
    })
}
