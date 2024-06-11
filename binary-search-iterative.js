let arr=[1,2,3,4,5,6,7];
let first=0;
let last=arr.length-1;

for (let i=0; i<arr.length; i++) {
   // let flag= false
    let mid= Math.floor(first+last)/2;
    let element=5;
    if (arr[mid]==element) {
        console.log("true");
      //   flag=true;
        break;
    }
   if (arr[mid]<element) {
      first = mid+1
   }
   if (arr[mid]>element) {
      last = mid-1
   }
   else{
    console.log("false");
    
   }
}