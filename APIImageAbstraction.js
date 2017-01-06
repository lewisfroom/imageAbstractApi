var express = require("express");
var app = express();
var gSearch = require("google-search");
var search = new gSearch({key: 'AIzaSyAN-mSztDaory3h7GFLeFuQGUmOFlbOv-0', cx: '008234528341168426623:uttymnktdhu'});

app.get("/imagesearch", function(req,res){
    //npm install bing.search --save
    //https://www.npmjs.com/package/bing.search
    search.build({q: "cats", searchType: "image", num: 10}, function(error, response) {
        if(error) throw error;
        console.log(response);
    });
    res.send(req.query);
});
app.listen(process.env.PORT, process.env.IP);
