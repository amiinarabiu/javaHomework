//Q- Write a Javascript function that acceptys a string as a parameter and converts the first letter of each word of the string to uppercase.

//function titleCase(str) {
    //var splitStr = str.toLowercase().split(' ');

   // for (var i = 0; i < splitStr.length; i++) {
     //   if (splitStr.length[i] < splitStr.length) {
          //  splitStr[i] = splitStr[i].charAt(0).toUppercase() + splitStr[i].substring(1);
       // }
        
        //str = splitStr.join(' ');
    //}
   // return str;

//}
//console.log(titleCase("A young girl has been looking for you"));

var string = 'Amina is a nice girl'
console.log(string.toUpperCase());

//Q2- Write a JavaScript function which accepts an argument and returns the type

var x = 4
console.log(typeof(x));

var person = "Amina"
console.log(typeof(person));

var y = true
console.log(typeof(y));

//Q3- Write a javascript program to find the area of a triangle where the lengths are 5, 6 and 7
//ES6 
const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const perimeter = (side1 + side2 + side3)/2;
const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);

//Q5- Write a javascript function that reverses a number

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(reverse_a_number(123456789));
//Q6- Write a Javascript function that accepts a string as a parameter and checks if the number is a prime number or not.

function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  console.log(isPrime(121));

//Q7- Write a javascript function that accepts a number as a parameter and counts the number  of vowels within the string.

 // function vowel_count(str1) 
  //{
     // var vowel_count = 'aeiouAEIOU';
      //var vcount = 0;

      //for (var x = 0; x < str1.length; x++)
      //{
        //  if (vowel_list.indexOf(str1[x] !==-1)
        //{
          //    vcount += 1;
          //}
                  
        //}
          //  return vcount;
    //}


      //  console.log(vowel_count("The quick brown fox"));

//Q8- Write a javascript function which says whether a number is perfect.

function is_perfect(number)
{
    var temp = 0;
    for(var i = 1; i <=number/2; i++)
    {
        if(number%i === 0)
        {
          temp += i;
        }
   }
 
   if(temp === number && temp !== 0)
      {
     console.log("It is a perfect number.");
      } 
   else
      {
     console.log("It is not a perfect number.");
      }   
} 
is_perfect(28);


//Q9- Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            console.log("Error! Go back");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("This is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("This is not a palindrome.");
                return false;
            }
        }
        console.log("This is a palindrome.");
        return true;
    }
    check_Palindrome('racecar');
    check_Palindrome('');
    check_Palindrome('amina');

//Q10- Write a JavaScript function that generates all combinations of a string

function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("cha");

//Q11- Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Honestly i do not want to do homework')); //The longest word here is 'honestly'


//Q12- Write a JavaScript program to target a given value in a nested JSON object, based on the given key.


//Q13- Write a JavaScript program to extract out the values at the specified indexes from a specified object.


const pull_at_Index = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
      .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
      .filter((v, i) => !pullArr.includes(i));
      
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
  };
  let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(pull_at_Index(arra1, [1, 3]));

  let arra2 =  [1, 2, 3, 4, 5, 6, 7];
  console.log(pull_at_Index(arra2, [4]));

//Q14- Write a JavaScript program to generate a random hexadecimal color code.

  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code())
  
//Q15- Write a JavaScript program to convert the length of a given string in bytes.
 
const byte_Size = str => new Blob([str]).size;
console.log(byte_Size('123456789abcdefg'));  
console.log(byte_Size('Hello There!'));  
console.log(byte_Size('A')); 

//Q16- Write a JavaScript program to measure the time taken by a function to execute.

let t1 = performance.now();

// Get the end time and the compute elapsed milliseconds.

let t2 = performance.now();
let elapsed = t2 - t1; 

// Write the elapsed time to the browser title bar.

time = elapsed + " ms";
console.log(time);

