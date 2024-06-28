const express = require('express');
const app = express();
let user = [{'CAR':'TATA ALTROZ','Descryption':'More Features and more safe less speed'},{'CAR':'Baleno','Descryption':'Medium features,less safe,more sales',},{'CAR':'I20','Descryption':'More features more safe medium sales',}]

app.get('/sooraj',function(req , res){
    res.json(user)

})

 

app.listen(5000,function(){
    console.log("listening on port 5000");
})