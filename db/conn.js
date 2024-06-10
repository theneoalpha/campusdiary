const mongoose = require("mongoose");
const DB ="mongodb+srv://<username>:<password>@cluster0.lqezs6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})
