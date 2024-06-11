let arr=[1,2,3,4,5,6,7,8];
let idx=2;
for (let i=idx; i<arr.length; i++) {
    // console.log(arr[i]);
    arr[i]=arr[i+1]
}
arr.length=arr.length-1
console.log(arr);