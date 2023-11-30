
function findAreaNInterstingPolygon(n) {
    let num1 = n**2
    let num2 = (n-1)**2
    return num1 + num2
}

findAreaNInterstingPolygon(3) === 13 ? console.log(`Congratulations, the answer 13 is correct!`) : console.error(Error(`Your answer is ${findAreaNInterstingPolygon(3)} but the correct answer is 13`))

// --------------------------- // ------------------------------ //

function f2(){
    return 2 * n * (n - 1) + 1;
}

// --------------------------- // ------------------------------ //
// Using Recursive Function
function recFct(n){
    if(n==1) return 1;
    else        // previous area + the area of the additional squares added to the perimeter. 
    return recFct(n-1) + 4 * (n-1); 
}

// --------------------------- // ------------------------------ //
// Using reduce method
function redMethod(n){
    // create an array with value from 1 through n
    const arr = Array.from({ length: n }, (_, index) => index + 1); // arr = [1, 2, 3, ..., n]
    // Accumulate the additional squares added; with initial value = 1
    return arr.reduce((acc, val) => 
        acc + 4 * (val-1), 1 );
}
// Examples : area of polygons in the cases n = 1 through 6
const examples = []
for(let i=1; i<=6; i++)
examples.push(redMethod(i));
console.table(examples);

// --------------------------- // ------------------------------ //