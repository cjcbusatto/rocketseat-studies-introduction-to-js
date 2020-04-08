// Based on an interval [x,y], write a function that show all even numbers
function even(x,y){
    const evenNumbers = [];
    for(let i=x; i<=y; i++){
        if(i%2==0){
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.log(even(2,10));