const arr=new Array();
let size=Number(prompt('Enter the size of array'));
for (let i= 0; i< size; i++) {
    arr.push(Number(prompt('Enter the next number of array')));
}
let max=arr[0];
for (let j = 1; j <size; j++) {
    if (arr[j]>max) {
        max=arr[j];
    }
}
console.log('the biggest number is '+max);