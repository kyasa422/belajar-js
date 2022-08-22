var arr = ["rafi", "adam", "gilang", "fazril"];
arr.pop();
arr.push("agus");
arr.unshift("anggi");
arr.unshift("jaenab");
arr.shift();
for (var i = 0; i < 1; i++) {
    arr.shift();
 }
console.log(arr.join("| "));

// for (i=0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

