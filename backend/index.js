const express = require("express")
const cors = require("cors");

const app=express();

app.use(cors())

app.get('/',(ask,give)=>{
    give.send("Cointab Assignment Backend")
})

app.listen(4000)