const mongoose = require("mongoose");
const DB ="mongodb+srv://theneoalpha:VikashKaushik@cluster0.yfeu8x6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})
