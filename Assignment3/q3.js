let sum=0;
let count=0;
let c=0;
for (let j= 0; count<10; j++) {
    for (let i=1; i<j; i++) {
        if (j%i==0) {
            c++;
        }
    }
    if (c==1) {
        sum=sum+j;
        count++;
    }
    c=0;
}
console.log('the sum is '+sum);