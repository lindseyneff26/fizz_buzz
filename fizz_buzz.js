function fizz_buzz(numbers) {
    let result = [];
    numbers.forEach( (num) => {
        if (num % 3 === 0 ){
            result.push("fizz")
        } else if ( num % 5 === 0 ) {
            result.push("buzz");
        } else if (num % 15 === 0 ) {
            result.push("fizzbuzz");
        } else {
            result.push(num);
        }
            }
    )
}

return result.join(', ');

const arr = [1,2,3,4,5,6,7,8,9,10];
const output =  fizz_buzz(arr);

console.log(output);
