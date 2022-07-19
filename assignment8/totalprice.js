const fs = require("fs");
let items =JSON.parse(fs.readFileSync(__dirname+'/cart.json'));
    let totalPrice=0;
    for (let i = 0; i < items.length; i++) {
        totalPrice+=((items[i].product_price)*(items[i].product_quantity));
        console.log(items[i].product_price);
    }
console.log(`Total price of all the items present is ${totalPrice}`);