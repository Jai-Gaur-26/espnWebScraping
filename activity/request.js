let req = require("request");
fs = require("fs");//fs is a node module. we have to 'require' it to use it's functions
req("https://www.espncricinfo.com/scores/series/8048/season/2020/indian-premier-league?view=results",requestKaAns);//request ka response will be recieved by 'requestKaAns' function
function requestKaAns(err,res,html){
    // console.log(err);
    // console.log(res.statusCode);
    //console.log(html);//html code of URL will be printed by this
    if(err){
        console.log("some error",err);
    }else{  
        //data->scrap
        //console.log(html);
        console.log("Recieved input");
        fs.writeFileSync("ipl.html",html);//explaination in copy
    }
}