var number = [1, 400, 12, 34, 5];
var i = 0;
var sum = 0;
while(i < number.length){
    sum = sum + number[i];
    i = i + 1;
}
console.log(`total : ${sum}`);