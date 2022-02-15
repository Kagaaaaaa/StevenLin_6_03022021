const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                                   
.is().max(30)                                  
.has().uppercase(1)                            
.has().lowercase(3)                            
.has().digits(1)                             
.has().not().spaces()                          
.is().not().oneOf(['Passw0rd', 'Password123', "Azerty123"]); 

module.exports = (req, res,next) =>{
    if(passwordSchema.validate(req.body.password)){
        next()
    } else{
        return res.status(400).json({error : passwordSchema.validate(req.body.password, { list: true })})
    }
}