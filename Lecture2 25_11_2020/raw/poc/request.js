//npm install request
let req = require("request");//to request and receive data from cricinfo server
//npm install cheerio
let ch = require("cheerio");//used for data extraction
let fs = require("fs");//fs is a node module. we have to 'require' it to use it's functions. used to create file
req("https://www.espncricinfo.com/series/8048/scorecard/1237181/delhi-capitals-vs-mumbai-indians-final-indian-premier-league-2020-21",requestKaAns);//request ka response will be recieved by 'requestKaAns' function
function requestKaAns(err,response,html){
    console.log(err);
    // console.log(res.statusCode);
    //console.log(html);//html code of URL will be printed by this
    //fs.writeFileSync("ipl.html",html);//explaination in copy  
    //html page -> selector -> input
    //load file
    //load html
    console.log("Received file");
    let STool=ch.load(html);
    let outputObj = STool("div.summary");
    //it give html of that matching element
    //console.log(outputObj.html());
    //it gives val
    //console.log(outputObj.text());
    //select => unique
    //html => output -> html
    //fs.writeFileSync("summary.html",outputObj.text());
    let inningsArr=STool("div.card.content-block.match-scorecard-table");//1 innings' table will be stored here 
    let fullHtml="<table>";//to present the output as a table
    for(let i = 0 ; i < inningsArr.length-1 ; i++){
        let tableBatsman = STool(inningsArr[i]).find("table.table.batsman");//STool will wrap the data. find() will find the batsman table in that data
        //extract batsman from the table
        fullHtml+= STool(tableBatsman).html();
        fullHtml+= "<table>";
    }
    fs.writeFileSync("innings.html", fullHtml);
}