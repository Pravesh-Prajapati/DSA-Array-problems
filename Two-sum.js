let arr=[1,2,3,4,5];
let sum= 5;
for (let i = 0; i < arr.length-1; i++) {
   let next= arr[i]+arr[i+1];
   if (next==sum) {
    console.log("true");
   }
}