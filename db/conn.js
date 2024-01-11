const mongoose = require("mongoose");
const DB ="mongodb+srv://theneoalpha:VikashKaushik@cluster0.cxmotro.mongodb.net/"
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})
