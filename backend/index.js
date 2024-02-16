const express = require("express"); //server ni run cheseki
const mongoose = require("mongoose"); //database connect cheseki
const cors = require("cors"); // frontend emo 3000 port lo run avuthundhi ,backend emo 8080 port run avuthundhi so   futher ga clash avvakunda vundeki ela cors use chesthunnam
require("dotenv").config(); //secure data ni save chesukoniki/personal auth/security auth



const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth",require("./routes/router"));

app.listen(8080, () => {
  console.log("server running on 8080");
});



mongoose.connect("mongodb://127.0.0.1:27017/practise")
.then(() => {
    console.log("DB connected");

})
.catch((error)=>{
    console.log(error.message);
})