//Объекты
let cat = {
    name: "Mark",
    breed: "Dvoryanin",
    weight: 5,
    isAngry: false
};

console.log(cat.isAngry);

delete cat.isAngry;

console.log(cat["weight"]);

let propName = "name";
console.log(cat[propName]);

for (let prop in cat){
    console.log(prop +" : "+ cat[prop]);
}

console.log(cat);


let cat2 = {
    name : "Marfa"
};

console.log(cat2.name);

let new_cat2 = cat2;
new_cat2.name = "Izzy";

console.log(cat2.name);

//функция-конструктор объекта
function Cat(name, color, fil_hunger) {
    //свойства
    this.name = name;
    this.color = color;
    this.fil_hunger - fil_hunger;

    //метод
    this.eat = function (food) {
        let hungryMessage;
        if (food >= fil_hunger){
            hungryMessage = "сыт, доволен";
        }
        else {
            hungryMessage = "голоден, бесится";
        }
        console.log (this.color + " " + this.name + ", съев " + food + " кг еды, " + hungryMessage);
    }

}

let manul = new Cat("Мурзик", "рыжий", 10);
let britain = new Cat("Роджер", "чёрный", 5);

manul.eat(3);
britain.eat(8);

console.log(manul instanceof Cat);
console.log(britain instanceof Cat);

//прототип
Cat.prototype.sayMeow = function() {
    console.log("Мяу!");
};
manul.sayMeow();

//Классы
class Cat_new {
    constructor(name, color, fil_hunger){
        this.name = name;
        this.color = color;
        this.fil_hunger = fil_hunger;
        }

    eat(food) {
          let hungryMessage;
          if (food >= this.fil_hunger){
              hungryMessage = "сыт, доволен";
          }
          else {
              hungryMessage = "голоден, бесится";
          }
          console.log (this.color + " " + this.name + ", съев " + food + " кг еды, " + hungryMessage);
      }
};

let meinkun = new Cat_new ("Пушок", "белый", 9);
meinkun.eat(10);

//Наследование
class Animal {
    constructor(name) {
        this.name = name;
        this.hasTail - true;
    }

    say() {
        console.log("Привет!");
    }
};

class Kitty extends Animal {
    constructor(name, color){
        super(name);
        this.color = color;
    }

    say() {
        console.log("Мяу!");
    }
}

class Horse extends Animal {
    constructor(name){
        super(name);
    }

    say(){
        console.log("Игого!");
    }
};

class Dog extends Animal {
    constructor(name, owner){
        super(name);
        this.owner = owner
    }

    say(){
        console.log("Гав!")
    }
};


let kitty = new Kitty("Бьянка","трёхцветка");
let horse = new Horse("Лолита");
let dog = new Dog("Анфиса", "Алексей");

kitty.say();
horse.say();
dog.say();
console.log(dog.owner);


//поиск счастливых билетов
function isLucky(n) {
    let str = String(n).padStart(6, "0");
    let sum1 = Number(str[0])+Number(str[1])+Number(str[2]);
    let sum2 = Number(str[3])+Number(str[4])+Number(str[5]);
    return sum1 === sum2;
}

let lucky_count = 0;
for (let i = 0; i < 1000000; i++) {

    if (isLucky(i)){
        lucky_count++;
    }
}
console.log(lucky_count);


//try catch throw
try {
    console.log(lalala);
}
catch(err){
    console.log("ОШИБАААААААА");
}

throw new Error("Моя ошибка № 5");


//promise
let catMood = new Promise(
    function (resolve, reject) {
    let isHappy = Math.random()>=0.5;
    if (isHappy) {
    var meow = {
    text: "Мяу ! ",
    length: Math.trunc((Math.random()+0.1)*10)
    };
    resolve(meow); // Успех
    } else {
    var reason = new Error('Cat is angry');
    reject(reason); // Отказ
    }
    
    }
    );
    
    catMood
    .then(function (result) {
    //resolve
    console.log(result)
    let s="";
    for (let i = 0; i < result.length; i++) {
    s=s+result.text;
    }
    console.log(s);
    
    })
    .catch(function (error) {
    // reject
    console.log(error.message);
    });