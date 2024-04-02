const [name, code] = require("fs").readFileSync(0).toString().trim().split(" ");

class Product {
    constructor(name = "codetree", code = 50){
        this.name = name;
        this.code = code;
    }
}

const product1 = new Product();
const product2 = new Product(name, code);

console.log(`product ${product1.code} is ${product1.name}`)
console.log(`product ${product2.code} is ${product2.name}`)