const users = require('../Schemas/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errors ={
    email: 'Email already exists',
    password: 'Password is incorrect',

}
const singup = async (req, res) => {
    try {
        const Email= req.body.email;
        const password = req.body.password;
        //check if email already exists
        const findemail = user.findone({email: Email});
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new users({
            email: Email,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}
module.exports = singup;