var num = [2,3,4,5,6,7];
num.splice(5, 1);
num.splice(0, 0, 1);
var squareNUM = num.map(function(item){
    return item * item;
});
var oddNUM = squareNUM.filter(function(x){
    return x % 2 == 1;
});
function multiply(arr){
    return arr.reduce(function(a, b){
        return a * b;
    })
};
console.log(squareNUM);
console.log(oddNUM);
console.log(multiply(oddNUM));