const express = require("express");
const User = require("../models/user.model");

const router = express.Router()

router.post("/fetchAndAddUsers",async(ask,give)=>{
    try {
        await User.sync()
        let fetchedData = await fetch("https://randomuser.me/api/?results=50");
    fetchedData=await fetchedData.json()
    fetchedData=fetchedData.results
    fetchedData.map(async data=>{
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
        give.send({msg:"Fetched and saved the user data to Mysql."})
    } catch (error) {
     console.log(error)
     give.send({error:"Internal Server Error"})   
    }
})

module.exports={
    router
}