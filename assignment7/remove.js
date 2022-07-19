//include required packages
const prompt = require('prompt-sync')();
const fs =require('fs');
//function that is to be executed on call
exports.removeItem=(id)=>{
    let items=JSON.parse(fs.readFileSync('items.json'));
    items=items.filter(items=>items.id!= id);
    console.log(items);
    fs.writeFile('items.json',JSON.stringify(items),(err)=>{
        if (err) {
            console.log('Something went wrong');
    
        }
        else
        console.log('Item(s) saved successfully');
    })
}