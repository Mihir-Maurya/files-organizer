#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const organizeObj = require("./organize");
// console.log(inputArr);
//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help "

let command = inputArr[0];
  if(command=="organize"){
    organizeObj.organizeKey(inputArr[1]);
  
  }else{
    console.log(typeof(command)+"Please input right command");
    
  }
  