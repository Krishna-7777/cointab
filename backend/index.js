const express = require("express")
const { sequelize } = require("./config/db");
const { userRouter } = require("./routes/routes");
const cors = require("cors")

const app=express();

app.use(cors())

app.get('/',(ask,give)=>{
    give.send("Cointab Assignment Backend")
})

app.use('/api/users', userRouter)

app.listen(4000, async()=>{
    try {
        await sequelize.authenticate();
        console.log("Connected to the DB and server is running at 4000...");
    } catch (error) {
        console.log(error);
        console.log("Error in connecting to the DB.");
    }
})