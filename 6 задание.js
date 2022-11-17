let arr;
let check = 0;
if (arr.length > 1){
    for (let i = 1; i < arr.length; i++){
        if (arr[i] != arr[i-1]){
            check++;
            break;
        }
    }
}
console.log(check == 0);