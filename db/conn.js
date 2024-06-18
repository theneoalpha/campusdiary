const mongoose = require("mongoose");
<<<<<<< HEAD
const DB ='mongodb+srv://theneoalpha:VikashKaushik@cluster0.pydiecm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
=======
const DB ="mongodb+srv://theneoalpha:VikashKaushik@cluster0.bfz9s5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
>>>>>>> 142bbd0644062d6d750587af6d3fddbcaa7a32b5
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})
