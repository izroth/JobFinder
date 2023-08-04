const mongoose = require('mongoose');


require('dotenv/config')
mongoose.connect(
    process.env.DB_URI,
    {
        useNewUrlParser: true,
       
    }
).then(() => {
    console.log('connected db')
}).catch((e) => {
    console.log("An error occured. Error: ",e)
})

console.log(process.env.DB_URI)
