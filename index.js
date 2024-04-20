//Question 1 Using for loop, print out the first 6 numbers starting from 8, 
//but terminate the loop once you find a number that is divisible by 5.

for (var i = 8; i <= 8 +5; i++) {
if ((i % 5) !==0){
    console.log (i);
}
else{
    break;
}
}

//Question 2 Using a while loop, calculate the factorial of 12.

var factorial = 1
var h = 12
var i=1
while ( i<=h){
factorial*= i;
i++;
}
console.log("factorial of 12 is:",factorial)


//Question 3 Using a for loop, print out the multiplication table for 13 up to the 13 multiplied by 20
const a =13
let b
for ( let i = 1; i <=20; i++ ){
b = a * i;
console.log(` ${a} * ${i} =${b}`);
}

// Question 4 Using a while loop, find the sum of all odd numbers between 1 and 100
var sum= 0;
var i = 1;
while ( i<=100) {
    if ( i % 2 !== 0)
    {sum += i};
    i++;
}
console.log("this is the sum of odd num btn 1 and 100:", sum)

//Use a for loop to count down from 30 to 1 and print each number.
for ( let i =30 ;i >= 1; i--){
    console.log ( "count down from 30 to 1:",i)
}