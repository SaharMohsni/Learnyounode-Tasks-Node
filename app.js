let http = require("http")
let bl=require('bl')
http.get(process.argv[2],function callback (res){
    res.pipe(bl(function (err,data){
         data=data.toString()
        console.log(data)
        }))
        http.get(process.argv[3],function callback(res){
            res.pipe(bl(function (err,data){
             data=data.toString()
                console.log(data)
            }))
        
            http.get(process.argv[4], function callback(res){
                res.pipe(bl(function (err,data){
                 data=data.toString()
                    console.log(data)
            }))
        })
    })
})