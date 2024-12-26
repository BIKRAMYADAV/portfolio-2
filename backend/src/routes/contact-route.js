const messageModel = require('../db/message-model')

module.exports = (app) => {
    app.post('/send-mail', async (req, res) => {
        console.log('The api was hit')
        const {name, email, message} = req.body;
        const messageToSave = new messageModel({
            name,email,message
        })
        try{
            await messageToSave.save(messageToSave);
        
            console.log('The message was saved successfully')
            res.status(200).json({
                message: 'The message was sent successfully'
            })
        }catch (error){
            console.error('There was an error in saving the message',error);
        }
    


      
    })
}