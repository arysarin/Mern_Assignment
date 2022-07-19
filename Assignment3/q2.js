const arr = new Array();
let size=Number(prompt('Enter the size of array'));
for (let i= 0; i< size; i++) {
    arr.push(Number(prompt('Enter the next number of array')));
    console.log(arr[arr.length-1])
    
}
let avg=0;
let sum=0;
let count=0;
for (let j= 0; j< size; j++) {
    if (arr[j]<0) {
        sum=sum+arr[j];
        count++;
    }
}
avg=sum/count;
console.log('average is '+avg);