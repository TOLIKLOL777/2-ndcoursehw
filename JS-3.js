// Задание 1
for (let i = 0; i < 2; i++) {
   console.log('Привет');
}

// Задание 2
for (let i = 1; i < 6; i++) {
   console.log(i);
}

// Задание 3
for (let i = 7; i < 23; i++) {
   console.log(i);
}

// Задание 4
const obj = {
    "Коля":'200',
    "Вася":'300',
    "Петя":'400'
}
for (let key in obj) {
   console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание 5
let n = 1000
let num = 0
while (n >= 50) {
    n /= 2
    num++
}
console.log(`Число n стало меньше 50. Результат - ${n}, количество итераций ${num}`)

// Задание 6
let friday = 3
while (friday <= 31) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7
}

// Доп Задание 1
let k = 100
let iterations = 0
while (k >= 0) {
    k -= 7
    iterations++
}
console.log(`Число k стало меньше 0. Результат ${k}, количество итераций ${iterations}`)

// Доп Задание 2
const months = {
    1:'Январь',
    2:'Февраль',
    3:'Март',
    4:'Апрель',
    5:'Май',
    6:'Июнь',
    7:'Июль',
    8:'Август',
    9:'Сентябрь',
    10:'Октябрь',
    11:'Ноябрь',
    12:'Декабрь'
}
for (let key in months) {
    console.log(`${key} месяц это - ${months[key]}`);
}

// Доп Задание 3
const book = {
    "название":"Евгений Онегин",
    "автор":"А. С. Пушкин",
    "год издания":1825,
    "жанр":"роман в стихах"
}
console.log(`Книга ${book["автор"]} ${book["название"]} ${book["год издания"]} г., жанр - ${book["жанр"]}`)

// Доп Задание 4
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numbers = []
for (let i = 0; i < 10; i++) {
    numbers.push(getRandomInt(1, 10))
}
console.log(numbers)
console.log(Math.min(...numbers))