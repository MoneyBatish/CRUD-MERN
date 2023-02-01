const mongoose=require("mongoose");

const Db=()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("Mongodb Connected");
    })
    .catch((err)=>{
        console.log(`Connection Failed ${err}`)
    })
}
module.exports = Db;