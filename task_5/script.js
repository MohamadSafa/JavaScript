let array1 = [1,2,4,6,8,11,45,66,73,98,102];

for (let i = 0; i < array1.length; i++) {
    console.log(array1);

const number = array1[i];
if (number % 2 == 0) {
    console.log(number + "is even");
}  
    else {
    console.log(number + "is odd");
}
}