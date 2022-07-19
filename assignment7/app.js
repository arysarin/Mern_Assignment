//include all packages
const prompt = require('prompt-sync')();
const fs =require('fs');
const create =require('./create');
const update=require('./update');
const remove=require('./remove');

//give the choice of operation to be performed
const option =Number(prompt('Enter the operation you want to perform-(1.add 2.update 3.remove)'));
switch (option) {
    case 1:
        create.addItem();
        break;

    case 2:
        var id=Number(prompt('Enter the id of the item you want to update-'));
        update.updateItem(id);
        break;
    
    case 3:
        var id=Number(prompt('Enter the id of the item you want to remove-'));
        remove.removeItem(id);
        break;

    default:
        console.log('option not available');
        break;
}

    let items =JSON.parse(fs.readFileSync('items.json'));
    let totalPrice=0;
    for (let i = 0; i < items.length; i++) {
        totalPrice+=((items[i].price)*(items[i].quantity));
        console.log(items[i].price);
    }
console.log(`Total price of all the items present is ${totalPrice}`);
