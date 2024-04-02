const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

function printHelloWorld(n){
    if(n===0){
        return;
    }
    
    printHelloWorld(n-1);
    console.log("HelloWorld");
}

printHelloWorld(input);