const mongoose = require("mongoose")

mongoose.set('strictQuery', false);
 const connectDatabase = () => {
   mongoose.connect(process.env.DB_LOCAL_URI,{
   
     
   }).then (con => {
    console.log(`Mongodb database connected with host: ${con.connection.host}`)
   })
}

module.exports = connectDatabase