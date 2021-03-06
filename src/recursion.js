/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // base case n === 0 
  // return number * (number-1) * (number - 1 - 1)
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return n * (factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// base case : return 0 if num = 0
// create variable = newArray.pop()
// return sum (newArray)
var sum = function(array) {
  var result = 0;
  var newArray = array.slice ();
  if (newArray.length === 0) {
    return 0;
  }
  result = newArray.pop();
  return result + sum(newArray);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    } else {
      sum += arraySum(array[i]);
    }
  }
  return sum;
};


// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  return isEven(n-2);
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 1 || n === 0) {
    return 0;
  }
  if (n < 0) {
    return n+1 + sumBelow(n+1);
  }
  return n-1 + sumBelow(n-1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var array = [];
  var step = 1;

  if (x === y) {
    return array;
  }
  if (x > y) {
    step = -1;
  }
  if (x === y-(step)) {
    return array;
  }
  return array.concat(x+step, range(x+step, y));
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp===0) {return 1}
  if(base === 0) {return 0}

  if(exp>0){
    return base * exponent (base,exp-1) // positive exponent
  } else {
    let negTotal = 1 /base * exponent(base,exp+1) // negative
    return Number(parseFloat(negTotal).toFixed(5));
  }
    

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  } else {
    return powerOfTwo(n/2);
  }

};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if(string.length === 1) {
    return string[0];
  }

  let reversed = ""
  var letter = string[string.length-1];

  var lastLetter = string.slice(0,string.length-1)
  return reversed.concat(letter + reverse(lastLetter))

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
string.toLowerCase().split(' ').join('')
//'kook'
var first = string[0]; //k
var last = string[string.length-1]; //k
if(first===last && string.length <=3) {
  return true
}

if(string.length >3){ //'kook'
    var newString = string.slice(1,string.length-1)
    return palindrome(newString)
  }
else {
  return false
}

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

/*
-51% -7 => -2
-51% 7 => -2
 51% -7 => 2


*/
var modulo = function(x, y) {

if(x===0 && y ===0) {
  return NaN
};

if(x<0){
  return -modulo(-x, y);
}
if(y<0){
  return modulo(x, -y);
}

if(y>x){ 
  return x;
}

return modulo (x-y, y);
 
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

var multiply = function(x, y) {
if(y===0){
  return 0
}

  if(y<0){
    return -x + multiply(x,y+1)
  } 
    return x + multiply(x, y-1)
  };

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if(y===0 && x===0){ 
    return NaN
  }

  if(y === 1){
    return x
  }

  if(x<y || x+y< 0 || x===0){
    return 0
  }

  if(x-y<y){
    return 1
  } 
    return 1+divide(x-y,y)
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
if(x<0 || y<0){return null}
if(x===y){
  return x
} else if (x>y){
  return gcd(x-y,y);
} else {
  return gcd(x,y-x)
}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

if(str1.length===0 && str2.length===0){
  return true  
}
   
if(str1[0]!==str2[0]){
  return false
}


var new1 = str1.slice(1);
var new2 = str2.slice(1)

return compareStr(new1,new2)
    
    
};



// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var array = [];

  if(str.length===0){
    return array;
  }

  
  var letter = str[str.length-1];
  array.push(letter)
  var newStr = str.slice(0,str.length-1)
  return createArray(newStr).concat(array)

};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var newArr = [];

  if(array.length===0){
    return newArr;
  }

  
  var letter = array[array.length-1];
  newArr.push(letter)
  var shortenedArray = array.slice(0,array.length-1)
  return newArr.concat(reverseArr(shortenedArray))

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var results = [];
  if (length === 0) {
    return results;
  }
  results.push(value);

  return results.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var array = [];


if(n>0){
  if(n%5===0 && n%3===0){
    array.push('FizzBuzz')
  } else if (n%5===0){
    array.push('Buzz')
  } else if (n%3===0){
    array.push('Fizz')
  } else {
    array.push(String(n))
  }

return fizzBuzz(n-1).concat(array)
} else if (n<=0){
  return array
}
  

};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {return 0;}

  if (array[0]===value ) {
    return 1+countOccurrence(array.slice(1),value);
  }
    return countOccurrence(array.slice(1),value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var resultArray = [];

  if(array.length===0){
    return resultArray
  }

  var result = callback(array[0])
  resultArray.push(result)
  var newArray = array.slice(1);
  return resultArray.concat(rMap(newArray,callback))
};

// 22. Write a function that counts the number of times a key occurs in an object.
/* var obj = {
  'e':{
    'x':'y'
    },
  't':{
    'r':{
      'e':'r'
    },
  'p':{
    'y':'r'}
    },
  'y':'e'};
*/
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;

  for(var i in obj){
    if(i===key){
      count++
    }
    if (typeof obj[i] === 'object') {
      count += countKeysInObj(obj[i], key)
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
   var count = 0;

  for(var i in obj){
    if(obj[i]===value){
      count++
    }
    if (typeof obj[i] === 'object') {
      count += countValuesInObj(obj[i], value)
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
/*
if (old_key !== new_key) {
    Object.defineProperty(o, new_key,
        Object.getOwnPropertyDescriptor(o, old_key));
    delete o[old_key];
}
*/

  for(var key in obj){
    if(key===oldKey){
    Object.defineProperty(obj,newKey,
      Object.getOwnPropertyDescriptor(obj,oldKey));
    delete obj[oldKey];
    }
    if (typeof obj[key] === 'object') {
     replaceKeysInObj(obj[key], oldKey,newKey)
    }
  }
  return obj;

  
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// fibonacci(2); // [0,1,1]
// fibonacci(1); // [0,1]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    var array = [0,1];
   
    if (n <= 0) {
      return null;
    }
    if (n === 1) {
      return array
    }
  
    while(n>array.length-1) {
        var length = array.length
        var value = array[array.length-1] + array[array.length-2] 
        array.push(value)
    }
    fibonacci(n-1)
    return array



};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
      return null;
    }
    if(n===0){
      return 0;
    }
    if (n === 1) {
      return 1;
    }

  return nthFibo(n-1) + nthFibo(n-2)
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var capsArray = [];

  if(array.length===0){
    return capsArray;
  }

  var capWord = array[0].toUpperCase()
  capsArray.push(capWord);

  return capsArray.concat(capitalizeWords(array.slice(1)))
  
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var capsArray = [];

  if(array.length===0){
    return capsArray;
  }

  var capWord = array[0][0].toUpperCase()+array[0].slice(1)
  capsArray.push(capWord);

  return capsArray.concat(capitalizeFirst(array.slice(1)))
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var total = 0;
  for (var key in obj) {
    if (obj[key] % 2 === 0) {
      total += obj[key];
    }
    if (typeof obj[key] == 'object') {
      total += nestedEvenSum(obj[key]);
    }
  }
  return total;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {


  if(array.length===0){
    return [];
  }


  if(typeof array[0] === 'object'){
    return flatten(array[0].concat(flatten(array.slice(1))));
  }

return [].concat(array[0], flatten(array.slice(1)))
  

};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var result = obj || {};

  if(str.length===0){
    return result;
  }
  
  var letter = str[0];

  if(!result[letter]){
    result[letter] = 1
  } else {
    result[letter]++;
  }


  return letterTally(str.slice(1),result);
  
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  }
  if (list[0] !== list [0+1]) {
    return [list[0]].concat(compress(list.slice(1)));
  }
  return [].concat(compress(list.slice(1)))
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];

  if(array.length===0){
    return result;
  }

  var current = array[0] 
  var augged = current.push(aug)
  result.push(current) 

  return result.concat(augmentElements(array.slice(1),aug))
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];
    if (array.length === 0) {
        return result;
      }

    var nextNumber = array.slice(1)[0]
    var currentNumber = array[0]
      if (nextNumber=== 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
      } else {
         result.push(currentNumber)
         return result.concat(minimizeZeroes(array.slice(1)));
      }
  };

  

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // var result = [Math.abs(array[0])];

  if(array.length===0){
    return array;
  }
  if (array[0] < 0 ) {array[0] = -array[0] ; }
  if (array[1] > 0 ) {array[1] = -array[1] ; }


    return [array[0], array[1]].concat(alternateSign(array.slice(2)))

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {

var result = [];
    var obj = {
      1: 'one',
      2: 'two',
      3: 'three', 
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
    }
  
    var splitArray = str.split(' ')
    var word = splitArray[0]

    if(!obj[word]){
        result.push(word)
    } else {
        result.push(obj[word]);
    }

    var newString = splitArray.slice(1)
  

    if(str.length===0){
        return result;
    }

    return result.concat(numToText(newString.join(' '))).join(' ').trim()


    }
  






// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
