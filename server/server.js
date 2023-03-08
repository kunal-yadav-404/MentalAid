const express=require('express');
const { spawn } = require('child_process');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.get("/api",(req ,res)=>{
  const sendData="Paritosh";
  const pythonProcess=spawn('python',['./script.py',sendData]);
  pythonProcess.stdout.on('data',data=>{
    console.log("the data is - "+data.toString());
    res.json({result:data.toString()});
  });
}) 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));