let arr=[1,2,3,4,5,6,7];
function binary(arr,first,last,mid) {
    let ele=3;
    if (last<first) {
        return false;
    }
    if (arr[mid]==ele) {
        return true
    }
    if (arr[mid]>=ele) {
       return binary( arr,first,last,mid-1)
    }
   if (arr[mid]<ele) {
    return binary( arr,first, last, mid+1);
   }
   return false;
}

let first=0;
let last=arr.length-1
let mid= (first+last)/2;
 let result=binary(arr,first,last,mid);
 console.log(result);

