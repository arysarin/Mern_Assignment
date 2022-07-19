//include required packages
const prompt =require('prompt-sync')();
const fs=require('fs');
//create a constructor
function Item(id,name,quantity,price) {
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
//function that is to be executed on call
exports.addItem=()=>{
    const n=Number(prompt('Enter the number of items to be entered-'));
    const itemArray=[];
    for (let i = 0; i < n; i++) {
        const id= prompt(`Enter the id of the item number ${i+1}-`);
        const name= prompt(`Enter the name of the item number ${i+1}-`);
        const quantity= prompt(`Enter the quantity of the item number ${i+1}-`);
        const price= Number(prompt(`Enter the price of the item number ${i+1}-`));
        const item = new Item(id,name,quantity,price);
        itemArray.push(item);
    }
    fs.writeFile('items.json',JSON.stringify(itemArray),(err)=>{
        if (err) {
            console.log('Something went wrong');
    
        }
        else
        console.log('Item(s) saved successfully');
    })
}