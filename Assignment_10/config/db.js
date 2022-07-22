const mongoose = require('mongoose');
exports.dbConn= async ()=>{
    try{
        const dbURL= "mongodb+srv://arysarin:sarin2001@cluster0.ykomy3t.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(dbURL,{useNewURLParser: true, useUnifiedTopology:true})
        console.log("************** Database is connected **************")
    }
    catch{(err)=>console.log(err)};
}
