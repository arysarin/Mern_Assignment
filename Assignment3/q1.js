const arr=new Array();
let size=Number(prompt('Enter the size of array'));
for (let i= 0; i< size; i++) {
    arr.push(Number(prompt('Enter the next number of array')));
}
let sum=0;
for (let j= 0; j< size; j++) {
    if (arr[j]>0 && arr[j]%2==0 && arr[j]%3==0) {
        sum=sum+arr[j];
    }
}
console.log('the sum is '+sum);