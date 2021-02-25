//Это однострочный комментарий

/* Это 
многострочный 
комментарий
 */

 let x;
 let y;
 let z;
 x = "Привет";
 console.log("x"||x)
 y = 1;
 console.log(y)

 z = x;
 x = y;
 console.log(x)
 y = z;
 console.log(y)


let a = 5, b = 6;
[a, b] = [b, a];
console.log(`${a} ${b}`);

let s = String(a);
console.log(s); //6


//Операторы
/*let counter = 1;
let nc = ++counter;
console.log(nc);*/

let counter = 1;
let nc = counter++;
console.log(nc);


let n = 1;
n += 2;
console.log(n);
n *= 3;
console.log(n);

console.log(+true);
console.log(+"");

console.log(9=="9");
console.log(9==="9");

console.log("Кят" > "Кот");

console.log("25" > 6);

let dec = 46 > 5 ? "МЭЭЭУ" : "Щинанайна";
console.log(dec);
//console.log("Hello, JavaScript!!!")

//Цикл
let n1 = 1;
let n2 = 1;
for (let i=3; i < 26; i++) {
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
    console.log(n2);

}   
//console.log(n2);

