let sum = 0;

for (let i = 0; i <= 100; i++) {
    let sq;
    sq = i * i;
    // console.log("The square of " + i + "is: " + sq);
    console.log(`The square of ${i} is: ${sq}`);
    sum = sum + i;
}

console.log(`The sum of numbers from 1 to 100 is : ${sum}`);

for (let i = 1; i <= 100; i = i + 2) {
    let sq;
    sq = i * i;
    console.log(`The square of odd number ${i} is: ${sq}`);
    sum += sq;
}

console.log(`The sum of squares of odd numbers is: ${sum}`);

for (let i = 0; i <= 100; i = i + 2) {
    let sq;
    sq = i * i;
    console.log(`The square of even number ${i} is: ${sq}`);
    sum += sq;
}

console.log(`The sum of squares of even numbers is: ${sum}`);