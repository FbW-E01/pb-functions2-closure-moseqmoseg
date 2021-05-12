// ### Closure

// 1. In your own words, define closure (1-2 sentences).
// 2. Study the following code, then answer the questions below.


// 1. a closure gives you access to an outer function’s scope from an inner function

// ```js
function personalDice(name) {
    return function() {
        // generate random number between 1 and 6
        const newRoll = Math.floor(Math.random() * 6);
        console.log(`${name} rolled a ${newRoll}`)
    }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
zoesRoll();



// * a. Where is closure used in this code? How can you tell? the inner function is using closure and its noticeable as its accesing ''name'' which is within the scope of the outer function. 
// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change? the ''name'' changes as its being altered yet, the inner function keeps track of this and updates it. The number will also change as its generated randomly. 
// * c. What is the lexical scope of `newRoll`? this might help https://stackoverflow.com/questions/1047454 newRoll as of now can only run within its function, it would be accesible by any other nested functions within it. 


// 3. Write a function that would allow you to do this using a closure.


function createBase(number) {
    return function(N) {
        const result = number + N;
        console.log(result);
    }
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27