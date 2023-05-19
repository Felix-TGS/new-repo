const mongoose = require("mongoose")
const uri = `mongodb+srv://examDB:passworte1@cluster0.oqrfhxe.mongodb.net/`

const connect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Successfully connected mongodb")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect