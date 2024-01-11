const mongoose = require("mongoose");
const DB ="mongodb+srv://theneoalpha:<password>@cluster0.l0jtluh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})
