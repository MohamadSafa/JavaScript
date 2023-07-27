function add (num1, num2) {
   const x = num1 + num2;
   console.log (x);
   return x;
}
const result = add (88,10);
console.log(result);

function substract (num1, num2){
    const x = num1 - num2;
    console.log (x);
    return x;
}

function multiply (num1,num2) {
    const x = num1 * num2;
    console.log (x);
    return x;

}

function divide (num1, num2) {
    if (num2 !==0) {
    const x = num1 / num2;
    return x;
} else {
    return 'Unable to divide';
}
}

function myCalculator (operation, x, y){
    if (operation === '+'){
        console.log(add(x, y));
    } else if (operation === '-') {
        console.log(substract(x, y));
    } else if (operation === '*') {
        console.log(multiply(x, y));    
    } else if (operation === '/') {
        console.log(divide (x, y));       
    } else {
        console.log('Invalid operation');
    }
}

