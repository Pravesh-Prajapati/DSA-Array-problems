let arr=[1,2,3,5,6,7];
let ele=4;
let idx=3;
for (let i=arr.length-1; i>=idx; i--) {
   if (i>=idx) {
    arr[i+1]=arr[i];
    if (i==idx) {
       arr[i]=ele;
    }
   } 
}
console.log(arr);

