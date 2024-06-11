let arr = [23,3,44,3,5,6];
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length; j++) {
    if (arr[j]>arr[j+1]) {
        temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
    }
   }
    
}
console.log(arr);