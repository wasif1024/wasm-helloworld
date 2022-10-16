import express from "express"
const app= express();
const PORT=3000;
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.send("Hello Worlds");
});
app.listen(PORT,()=>console.log("Server is listening on port."));