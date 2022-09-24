var arr = ['laras', 'sarah', 'dhiza', 'mahmud', 'jaenab'];
arr.splice(2, 0, 'Rafi');
console.log(arr.join('|'));

var arr2 = arr.slice(1, 3);
console.log(arr2.join('|'));
