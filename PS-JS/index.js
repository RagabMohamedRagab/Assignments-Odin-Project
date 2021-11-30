/*
Write a function called add7 that takes one number and returns that number + 7Write a function called add7 that takes one number and returns that number + 7
*/
function Add7(num){
    return num+7;
}
console.log(Add7(4));
/*
Write a function called multiply that takes 2 numbers and returns their product.
*/
function Multi(num1,num2){
    return num1*num2;
}
console.log(Multi(3,2));
/*
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
*/
function capitalize(Name){
   
    if(!(typeof(Name)=='number')){
       return Name.charAt(0);
    }else{
        return "Invalid Input"; 
    }
}
console.log(capitalize("2"))
/*
Write a function called lastLetter that takes a string and returns the very last letter of that string:
*/
function lastLetter(name){
   
    if(!(typeof(name)=='number')){
       return name.charAt(name.length-1);
    }else{
         return "Invalid Input";
    }
}
console.log(lastLetter("Ragab"))



/*helloWorld */
console.log("Hello World !")
/**repeatString */

"Ragab".repeat(5);
/**reverseString */
let Name="Ragab";
let arr=Name.split('');
console.log(arr.reverse());
let reverseName=arr.join('');
console.log(reverseName)

/**removeFromArray */
const Arr=[1,2,3,4,5]
console.log(Arr);
// from start
 Arr.shift();
 // from end 
 Arr.pop();
 console.log(Arr);
/**sumAll */
const Arr1=[1,2,3,4,5];
console.log(Arr1.reduce((per,curr)=>per+curr));
/**leapYears*/
 let Year=parseInt(prompt("Enter Years"));
 if(Year%4==0){
     console.log("Leap Year!");
 }else{
    console.log("Good Year!");

 }
/***tempConversion */
 let A=1;
 let B=2;
 console.log("A ="+A);
 console.log("B ="+B);
 let temp;
 temp=A;
 A=B;
 B=temp;
 console.log("A ="+A);
 console.log("B ="+B);










