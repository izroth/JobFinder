const users = require('../Schemas/users');
const bcrypt = require('bcrypt');
const jwt = require('json-web-token');
const errors ={
    no_email: 'Email is required',
    no_password: 'Password is required',
    email_exists: 'Email already exists',
    no_user: 'An error occured while creating user',


}
const singup = async (req, res) => {
    try {
        const { Email, password } = req.body;
        
        if(!Email) {
            throw new Error('no_email');
        }
    
        if(!password){
            throw new Error('no_password');
        }
     
        const findemail = users.find({email: Email});
        console.log(findemail)
        if(findemail) {
            throw new Error('email_exists');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

        const user = new users({
            email: Email,
            password: hashedPassword,
            token : token,
        });
        if(!user) {
            throw new Error('no_user');
        }
        const savedUser = await user.save();
        res.json({message: 'User created successfully', data: savedUser});

    } catch (e) {
        console.log(e);
        res.status(400).json({message: errors[e.message] || 'An error occured.'});
    }
}
module.exports = singup;