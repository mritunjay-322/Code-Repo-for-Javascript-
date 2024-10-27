let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let Value = Number(score);
// console.log(typeof Value);
// console.log(Value);

// "33" => 33
// "33abc"=> NaN but type becomes Number after typecasting
// true => 1 & false =>0

let IsLoggedin = 1;

let booleanIsloggedin = Boolean(IsLoggedin);
// console.log(booleanIsloggedin)

// 1 -> true & 0 -> false
// any letter as string -> true (ex- "shiv")
// empty string -> false
// nothing initialised false

let num = 33
let stringnum = String(num)
// console.log(stringnum)  
// console.log(typeof stringnum)   //string
// console.log(typeof num)     // number

//  ************************** Operation ********************************

let val = 3
let negval = -val
// console.log(negval);

// console.log(2+2);   //add 4
// console.log(2-2);   //sub 0
// console.log(2*2);   //multiply 4
// console.log(2**3);  //power 8
// console.log(2/3);   //divide  0.6666666666666666
// console.log(2%3);   //remainder 2

let str1 = "Mritunjay"
let str2 = " Shree"
let str3 = str1 + str2
// console.log(str3)    //Mritunjay Shree

// console.log("1" + 2)    //12
// console.log(1 + "2")    //12
// console.log("1" + 2 + 2)    //122
// console.log(1 + 2 + "2")    //32

/* It goes like -> if string first me hai whole will act like string 
    and if number first me then jo operation hai wo pehle ho jayega then string me change ho jayega */
    
console.log(true)
console.log(+true)
console.log(+"")

let num1, num2, num3

num1 =  num2 = num3 = 2+2
console.table([num1, num2, num3])

let Gamecounter = 100
Gamecounter++;
console.log(Gamecounter)