const express = require("express");
const cors = require ("cors");
const collection = require("./mongo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req,res) => {

})

app.post("/", async(req, res) => {

    // eslint-disable-next-line no-unused-vars
    const{email, password} = req.body

    try{
        const check = await collection.findOne({email:email})
        if (check){
            res.json("This email is already linked to an account!")
        }
        else{
            res.json("New email!")
        }
    }
    catch(e){
        res.json("This email is not linked to an account!")
    }
})

app.post("/signup", async(req, res) => {

    const {email, password} = req.body
    const data = {
        email:email,
        pasword:password
    }

    try{
        const check = await collection.findOne({email:email})
        if (check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.listen(3001, () => {
    console.log("Connected to PORT 3000")
})