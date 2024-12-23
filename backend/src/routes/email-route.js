const nodemailer = require('nodemailer')
const email_user = process.env.EMAIL_USER
const email_password = process.env.EMAIL_PASSWORD

module.exports = (app) => {
    app.post('send-mail', async (req, res) => {
        const {name, email, message} = req.body;

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth : {
                user: email_user,
                pass: email_password
            }
        })

        const mailOptions = {
            from : email,
            to : email_user,
            subject: `message from ${name}`,
            text: message
        }

        try{
            await transporter.sendMail(mailOptions)
            res.status(200).json({message: 'sent successfully'})
        } catch (error){
            res.status(500).json({message: 'internal server error'})
            console.error(error);
        }
    })
}