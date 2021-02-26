//вложенные циклы
let result = "    ";

for (let i = 10; i < 21; i++){
    result += i + "  ";
}
console.log(result);


for (let x = 10; x < 21; x++){
    result = x + " ";
    for (let y = 10; y < 21; y++){
        result += x*y + " ";
    }

    console.log(result);

}


//проверка на простое число
let n = 10;
let s = 2;
let flag = 0;
while (s < n && flag == 0) {
 if (n%s==0){
    flag = 1;
  break;  
} 
 s++;
}
if (flag == 1) {
    console.log("Число "+n+" не простое!"); 
}
else {
    console.log("Число "+n+" является простым!"); 
};


//определить время года по месяцу
let month = 2;
let month_str;
switch(month) {
case 12:month_str = month+' - Декабрь - Зимний месяц';
        break;
case 1: month_str = month+' - Январь - Зимний месяц';
        break;
case 2: month_str = month+' - Февраль - Зимний месяц';
        break;

case 3: month_str = month+' - Март - Весенний месяц';
        break;
case 4: month_str = month+' - Апрель - Весенний месяц';
        break;
case 5: month_str = month+' - Май - Весенний месяц';
        break;

case 6: month_str = month+' - Июнь - Летний месяц';
        break;
case 7: month_str = month+' - Июль - Летний месяц';
        break;
case 8: month_str = month+' - Август - Летний месяц';
        break;

case 9: month_str = month+' - Сентябрь - Осенний месяц';
        break;
case 10: month_str = month+' - Октбярь - Осенний месяц';
         break;
case 11: month_str = month+' - Ноябрь - Осенний месяц';
         break;
}
console.log(month_str);



//функция на простоту числа
function checkSimple (new_n) {
    let s = 2;
    let flag = 0;

    while (s < new_n && flag == 0) {
     if (new_n%s==0){
        flag = 1;
    } 
     s++;
    }
    if (flag == 1) {
        console.log("Число "+new_n+" не простое!"); 
    }
    else {
        console.log("Число "+new_n+" является простым!"); 
    };
};
checkSimple(4);


//функция на месяц
function checkMonth (month) {
    let month_str;
switch(month) {
case 12:month_str = month+' - Декабрь - Зимний месяц';
        break;
case 1: month_str = month+' - Январь - Зимний месяц';
        break;
case 2: month_str = month+' - Февраль - Зимний месяц';
        break;

case 3: month_str = month+' - Март - Весенний месяц';
        break;
case 4: month_str = month+' - Апрель - Весенний месяц';
        break;
case 5: month_str = month+' - Май - Весенний месяц';
        break;

case 6: month_str = month+' - Июнь - Летний месяц';
        break;
case 7: month_str = month+' - Июль - Летний месяц';
        break;
case 8: month_str = month+' - Август - Летний месяц';
        break;

case 9: month_str = month+' - Сентябрь - Осенний месяц';
        break;
case 10: month_str = month+' - Октбярь - Осенний месяц';
         break;
case 11: month_str = month+' - Ноябрь - Осенний месяц';
         break;
}
return month_str;
};
console.log(checkMonth(5));


//рекурсия
function Fibbonaci(n){
    
    if (n<3){
        return 1;
    }
    else {
        return Fibbonaci(n-1)+Fibbonaci(n-2);
    }
};
console.log(Fibbonaci(25));


//анонимная функция
let sayHello = function(msg){
    return "Hello, "+ msg;
};
console.log(sayHello("World"));

//анонимная функция-стрелка
let sayHello2 = (msg) => {
    return "Hello, "+ msg;
};
console.log(sayHello2("Alenka"));

let sayHello3 = (msg) => console.log("Hello, "+msg);
sayHello3("Jacky");


//Callack
function sleep()
{
    console.log("Mrrrrrrrrr");
};

function eat()
{
    console.log("Omnomnom");
};

let catLife = function(time, sleep, eat) {
    if (time%2==0){
        return eat();
    }
    else {
        return sleep();
    }
};

catLife(4, sleep, eat);
