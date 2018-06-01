const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const async = require('async') ;
const arp = require('node-arp');

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send({user: "ok"});
})

//route
app.post('/async',(req,res)=>{
    console.log(req.body.username)
    async.waterfall([
        (cb)=>{
            let user = {username:req.body.username||"minh", password:req.body.password||'123'};
            cb(null,user)
        },
        (user,cb) => {
           // user.ip = req.ip;
            user.ip = req.ip.replace(/^.*:/, '');
            //cb('boooooi',user)
            console.log("ARP for: " + user.ip);
			arp.getMAC(user.ip, (err, mac) => {
				if(err) {
					console.error("There was an error while getting user's MAC address:\n" + err.stack);
					cb(err);
				} else if(mac) {
					user.mac = mac;
					cb(null, user);
				} else
					cb(new Error("A MAC address for user's IP wasn't found in system's ARP table"));
            });
            
         
        },
        (user,cb)=>{
           
            cb(null,user)
        }

    ],(err,data)=>{
        
        
            console.log(`callback function got err: ${err}, data: ${data}`);
            res.send(data)
        
    })
})

app.listen(6500,()=>console.log('running 6500'))