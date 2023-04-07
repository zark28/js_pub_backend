const express = require("express")
const app =express()
require("./dbConnect")

app.use(express.json())

const jspubBranchesRoutes = require("./jspubBranchesRoutes")
const jspubAddressesRoutes = require("./jspubAddressesRoutes")


app.use("/branches", jspubBranchesRoutes)
app.use("/addresses", jspubAddressesRoutes)



app.listen(3000,()=>{
    console.log("Sever running on port 3000")
});