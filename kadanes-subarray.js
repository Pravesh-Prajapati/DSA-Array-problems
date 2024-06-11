let arr=[5,4,-2,-6,1,3,0];
let sum=0;
let max=0;
for (let i = 0; i < arr.length; i++) {
    sum = sum+arr[i];
    if (max<sum) {
        max=sum;
    }
}
console.log(max);
console.log(arr);