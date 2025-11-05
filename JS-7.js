// Задание 1
const peoplelist = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(peoplelist.sort((a, b) => a.age - b.age));

// Задание 2
function isPositive(num) {
   if (num > 0) {
      return num
   }
}
function isMale(person) {
   if (person.gender == 'male') {
      return person
   }
}
function filter(arr, ruleFunction) {
   const output = [];

   for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
         output.push(ruleFunction(arr[i]));
      }
   }

   return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// Задание 3
const data_timer = () => {
   const interval = setInterval(() => {
      console.log(new Date());
   }, 3000);
   setTimeout(() => {
      clearInterval(interval);
      console.log('30 секунд прошло')
   }, 30000);
}

data_timer()

// Задание 4
function delayForSecond(callback) {
   setTimeout(() => {
      callback();
   }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond((item) => {
      return sayHi('Глеб');
   })