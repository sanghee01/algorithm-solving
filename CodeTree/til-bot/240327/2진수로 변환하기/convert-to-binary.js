const number = Number(require("fs").readFileSync(0).toString().trim());


function getBinary(n){
    const digits = [];
    let binary = '' 

    while(true){
        if(n<2){
            digits.push(n);
            break;
        }
        
        digits.push(n%2);
        n = Math.floor(n/2);
    }

    for(let i = digits.length-1; i>=0; i--){
        binary += digits[i];
    }

    return binary;
}

console.log(getBinary(number))