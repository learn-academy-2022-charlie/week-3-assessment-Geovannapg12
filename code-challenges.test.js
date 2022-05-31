// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

// a) Create a test with expect statements for each of the variables provided.

describe ("number", ()=>{
    it ("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    const fibLength1 = 6
    const fibLength2 = 10
    expect(number(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(number(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// //I got red -number is not defined-
// //_________________________________________
// // const fibLength1 = 6
// // // Expected output: [1, 1, 2, 3, 5, 8]
// // const fibLength2 = 10
// // // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// // b) Create the function that makes the test pass.
//create a function called number
// use a foor loop that will iterate through the array
// use .push to add a new value at the end of the array

//for some reason I wanted to use .map but then I realize that would not be of help at all for this problem
 
const fibLength1 = 6
const fibLength2 = 10

 const number = (num) => {
     let newArr = [1, 1]
     for (let i = 2; i < num; i++) {
        newArr.push(newArr[i-2] + newArr[i - 1])
     }
     return newArr
 }


// with a lot of help it passed


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("arrai", () => {
    it("returns a new array of only odd numbers sorted from least to greatest.", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    expect(arrai(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(arrai(fullArr2)).toEqual([-823, 7, 23])
    })
})

// //I got red -array is not defined-

// // b) Create the function that makes the test pass.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a function called array
// function will return the numbers only the numbers in the array given, and in order from leat to greatest
//Use .filter to go through the array and find the values that we need
//Apply the modulo to get numbers that are odd
// use typeof to make sure we strictly get numbers
// find way to get the expected output

const arrai = (arr) =>{
    arr.sort(function(a, b){return a - b})
    return arr.filter(value => value % 2 !==0 && typeof value === 'number')
   
   }

// to sort the numbers from smallesst to largest I tried using Math.min(), I spent a while trying to get it to work but it does not 
// the other option was .sort, I tried using it inside of the return which did not work. 


// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

describe("array1", () => {
    it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd3 = []
    expect(array1(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(array1(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(array1(numbersToAdd3)).toEqual([])
    })
})

// I got red -array1 is not defined-

// const numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// // Expected output: []


// b) Create the function that makes the test pass.
//create a function called array1
//create an empty array to equal zero
//use .map that will iterate thorugh the array
// create conditional  statements 

const array1 = (array) => {
    let newArray = [0]
    return array.map((value, index) => {
        if (index > 0) {
            return newArray = value + newArray
        } else {
            return newArray = value
         }
    })
}

// const array1 = (array) => {
//     let sum = 0
//     for (let i=0; i <array1.length; i++){
//         return sum + array1[i]
//     }
// }


//while googling how to add the numbers in an array I came across .reduce but it does not work on empty arrays
// It did not want to work at first and I decided to go with a different way that didn't work either, after getting a second look and help from a different output I noticed that in my test I had not changed the expected output.