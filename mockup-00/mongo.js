const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mockup-00")
.then(() => {
    console.log("Connected to server!");
})
.catch(() => {
    console.log("Something is wrong!")
});

const newSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection", newSchema)

module.export = collection