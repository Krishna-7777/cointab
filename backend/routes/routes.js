const express = require("express");
const User = require("../models/user.model");

const userRouter = express.Router()

userRouter.post("/fetchAndSave", async (ask, give) => {
    try {
        await User.sync()
        let fetchedData = await fetch("https://randomuser.me/api/?results=50");
        fetchedData = await fetchedData.json()
        fetchedData = fetchedData.results
        fetchedData.map(async data => {
            let extractedUser = {
                gender: data.gender,
                firstName: data.name.first,
                lastName: data.name.last,
                streetNumber: data.location.street.number,
                streetName: data.location.street.name,
                city: data.location.city,
                state: data.location.state,
                country: data.location.country,
                email: data.email,
                username: data.login.username,
                password: data.login.password,
                age: data.dob.age,
                phone: data.phone,
                picture: data.picture.medium
            }
            await User.create(extractedUser)
        })
        give.send({ msg: "Fetched the data, then saved it to Mysql Database." })
    } catch (error) {
        console.log(error)
        give.send({ error: "Internal Server Error" })
    }
})

userRouter.delete("/", async (ask, give) => {
    try {
        await User.destroy({ where: {} })
        give.send({ msg: "All users have been deleted." })
    } catch (error) {
        console.log(error)
        give.send({ error: "Internal Server Error" })
    }
})

userRouter.get("/", async (ask, give) => {
    try {
        let page=ask.query.page||1
        let {age,gender}=ask.query
        let where={}
        if(age){
            where.age=age
        }
        if(gender){
            where.gender=gender
        }
        let data= await User.findAndCountAll({limit:10,offset:(page-1)*10,where})
        let payload={
            currentPage:page,
            pages:Math.ceil(data.count/10),
            results:data.rows
        }
        give.send(payload)
    } catch (error) {
        console.log(error)
        give.send({ error: "Internal Server Error" })
    }
})

module.exports = {
    userRouter
}