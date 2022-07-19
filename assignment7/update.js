//include required packages
const prompt = require('prompt-sync')();
const fs =require('fs');
//function that is to be executed on call
function Item(id,name,quantity,price) {
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
exports.updateItem=(id)=>{
    let items=JSON.parse(fs.readFileSync('items.json'));
    items=items.filter(items=>items.id!= id);
    console.log(items);
    const name=prompt(`Enter the name of the item with id-${id}`);
    const quantity=prompt(`Enter the quantity of the item with id-${id}`);
    const price=prompt(`Enter the price of the item with id-${id}`);
    const newItem=new Item(id,name,quantity,price);
    items.push(newItem);
    fs.writeFile('items.json',JSON.stringify(items),(err)=>{
        if (err) {
            console.log('Something went wrong');
    
        }
        else
        console.log('Item(s) saved successfully');
    })
}