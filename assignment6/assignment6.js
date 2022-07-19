let cust=[];
for(let i=0;i<2;i++){
    let name=prompt(`Enter the name of the customer${i+1}`);
    let email=prompt(`Enter the email of the customer${i+1}`);
    let phone =prompt(`Enter the phone number of the customer ${i+1}`);
    let no_of_times_shopped=Number(prompt(`Enter the number of times the customer ${i+1} shoped`));
    let purchase_history=[];
    for(let j=0;j<no_of_times_shopped;j++){
        purchase_date=prompt(`Enter the purches date ${j+1}`);
        n=Number(prompt(`Enter the Number of item purches on ${purchase_date}`));
        let item_purchase=[];
        for(let k=0;k<n;k++)
        {
            product_name=prompt(`Enter the product name: `);
            product_price=Number(prompt(`Enter the price of the ${product_name}`));
            let item={
                product_name,
                product_price,
            }
            item_purchase.push(item);
        }
        let purchase_hist={
            purchase_date,
            item_purchase,
        }
        purchase_history.push(purchase_hist);
    }
    let customer={
        name,
        email,
        phone,
        no_of_times_shopped,
        purchase_history,
        total_purchas:function(){
           let purchase=0;
           for(let i=0;i<this.no_of_times_shopped;i++)
           {
            let item_purchase=this.purchase_history[i].item_purchase;
            for(let j=0;j<n;j++){
                purchase +=item_purchase[j].product_price;
            }
           }
           return purchase;
        }
    }
    cust.push(customer);
}

for(let i=0;i<2;i++){
     console.log(`Information about customer ${i+1}`);
     let {name,email,phone,no_of_times_shopped,purchase_history}=cust[i];
     console.log(`Name: ${name}\r\nEmail:${email}\r\nPhone: ${phone}\r\n no of times shoped: ${no_of_times_shopped}`);
    for(let j=0;j<purchase_history.length;j++){
       let {purchase_date,item_purchase}=purchase_history[j];
       console.log(`purchase_date: ${purchase_date}`);
       for(let k=0;k<n;k++){

          let {product_name,product_price}=item_purchase[k];
          console.log(`product name: ${product_name}\r\nproduct price:${product_price}`);

       }
    }
    console.log(`Total : ${cust[i].total_purchas()}`);
    if(no_of_times_shopped>5){
        console.log(`${name} has shoped for more than 5 times`);
    }
}