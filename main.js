#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const organizeObj = require("./organize");

let command = inputArr[0];
  if(command=="organize"){
    organizeObj.organizeKey(inputArr[1]);
  
  }else{
    console.log(typeof(command)+"Please input right command");
    
  }
  
