const mongoose = require("mongoose");
const DB ="mongodb+srv://theneoalpha:VikashKaushik@cluster0.bfz9s5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})
