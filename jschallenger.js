// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
function myFunction(a, b){

return a.filter((elem) => elem !== b)
}

myFunction([1,2,3], 2)
myFunction([1,2,'2'], '2')
myFunction([false,'2',1], false)
myFunction([1,2,'2',1], 1)


// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a){

    return a.slice(0,-3)
}

myFunction('abcdefg')
myFunction('1234')
myFunction('fgedcba')

// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function myFunction(set, val){

    return set.has(val)
}

myFunction(new Set([1, 2, 3]), 2)
myFunction(new Set([123]), 2)
myFunction(new Set(['1', '2', '3']), '2')
myFunction(new Set('123'), '2')

// Write a function that takes an object (a) as argument
// Return an array with all object keys

//my solution
function myFunction(a){
    let arr = []
    for(key in a){
    arr.push(key)}
    return arr
}

// authors solution
function myFunction(a) {
    return Object.keys(a);
 }

myFunction({a:1,b:2,c:3})
myFunction({j:9,i:2,x:3,z:4})
myFunction({w:15,x:22,y:13})

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

//my solution
function myFunction(a,b){
    return a.includes(b)? b + a : a + b
}

//authors solution
    function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
  }

myFunction('cheese', 'cake')
myFunction('lips', 's')
myFunction('Java', 'script')
myFunction(' think, therefore I am', 'I')

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

//my solution
function myFunction(a,b){
    let Obj = {}
    Obj[a] = b
    console.log(Obj)
}

//authors solution
function myFunction(a,b){

    return{[a]:b}
}

myFunction('a','b')
myFunction('z','x')
myFunction('b','w')

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

//my solution
function myFunction(a, b, c, d, e, f) {
    let sum = a + b;
    let sub = sum - c;
    let mult = sub * d;
    let div = mult/e
    let power = Math.pow(div,f)
    return power
 }

//author solution
function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }

//Write a function that takes an array of strings as argument
//Returns the longest string

//my solution
function myFunction(arr) {
   
    var max_str = arr[0].length;
    var ans = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var maxi = arr[i].length;
        if (maxi > max_str) {
            ans = arr[i];
            max_str = maxi;
        }
    }
    return ans;
}

//Author solution
function myFunction( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
    }

//Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

//my solution
function myFunction(a) {
    if(a%2 === 0)
    return true
    else return false
 }

//Author solution
function myFunction(a) {
    return a % 2 === 0
  }

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

//solution
function myFunction(a) {
   
    return a.slice(0,a.length/2)
 }


 