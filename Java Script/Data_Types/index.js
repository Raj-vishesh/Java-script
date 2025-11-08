    //     Numbers

let num1 = 20;
console.log(num1);
console.log(typeof num1);

let num2 = 30.5;
console.log(num2);
console.log(typeof num2);

let num3 = '45';
console.log(num3);
console.log(typeof num3)


//      Strings


let s1 = 'hi';
console.log(s1 , typeof s1);

let s2 = "hello";
console.log(s2 , typeof s2);

let s3 = `hey`;
console.log(s3 , typeof s3);

//      Boolean

let a = true;
console.log(a, typeof a);
console.log(!a, typeof !a);
console.log(!!a, typeof !!a);
console.log(a+5);           // mathematiucal value of true is 1  so 1 +5 = 6



//   Null

let n = null;

console.log(n , typeof n );   // this is a bug in javascript  it should be object but it shows null


//  Undefined

let u;

console.log(u , typeof u );  // u is not defined so its value is undefined and type is also undefined


//  symbol

let p = Symbol('123');
let q = Symbol('123');

console.log(p == q);       // false because symbol are unique



// bigint


let big1 = 32452423433453636435n;    
console.log(big1 , typeof big1);




//   object                 

let obj={
    name : "Vishesh",
    age : 20

}

console.log(obj , typeof obj);




let user =["Ram" , " Vishesh" , " Shyam" , 10 , 32,3213];           //   Thsi is array in Js 
console.log(user , typeof user);