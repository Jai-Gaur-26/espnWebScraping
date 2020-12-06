// let cap={
//     name:"Steve",
//     lastName:"Rogers",
//     isAvenger:true,
//     movies:["first avenger","winter soldier","civil war"],
//     age:45,
//     address:{
//       state:"New York",
//       city:"Manhattan"
//     }
//   }
  
//   console.log(cap);
//   console.log(cap.name);
//   //add new key:value pair
//   cap.friends=["peter","tony","bruce"];
//   console.log(cap);
//   console.log();
//   console.log("before updating age=",cap.age);
//   console.log("-------------------");
//   //set/update value
//   cap.age=46;
//   console.log("after updaing age=",cap.age);
  
//   //delete
//   delete cap.address;
//   console.log(cap);

let req = require("request");
req("https://www.google.com/",requestKaAns);//request ka response will be recieved by 'requestKaAns' function
function requestKaAns(err,res,html){
    console.log(err);
    console.log(res.statusCode);
    //console.log(html);//html code of google will be printed by this
    if(err){
        console.log("sone error",err);
    }else{
        //data->scrap
        console.log(html);
    }
}