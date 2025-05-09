const express = require ('express');
const dbConnect = require ('./mongodb');
const app = express();
app.use(express.json());

add.get('/', async(req,res) => {
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
})

app.post('/',async(req,res) => {
    let result=await dbConnect();
    result=await result.insertOne(req.body);
    res.send("succesful");
})

app.put('.', async(req,res) => {
    let result = await dbConnect();
    result = await result.updateOne({name:req.body.nmae},{$set:{name:req.body.newval}});
    res.send("seccessful");
})

app.delete ('/', async(req,res) => {
    let result = await dbConnect();
    result = await result.deleteOne(req.body);
    res.send("success");
})

const port = 3000;
app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
})