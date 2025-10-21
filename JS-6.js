// Задание 1
let text1 = "js"
console.log(text1.toUpperCase());

// Задание 2
function myfunc(array, key_word) {
    key_word = key_word.toLowerCase()
    const new_arr = [];
    array.forEach(element => {
        if (element.toLowerCase().startsWith(key_word.toLowerCase())){
            new_arr.push(element)
        }
    });
    return new_arr

}

const arr2 = ['Apple pie', 'pie apricot', 'Banana pie', 'Pie avocado']
let word = "pie"

console.log(myfunc(arr2, word));

// Задание 3
let num3 = 32.58884

console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));

// Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
function random_num() {
    console.log(Math.floor(Math.random() * 11));
}

// Задание 6
function random_array(num) {
    const arr6 = []
    for (let i = 0; i < Math.floor(num / 2); i++) {
        arr6.push(Math.floor(Math.random() * (num + 1)))
    }
    return arr6
}

console.log(random_array(10));

// Задание 7
function random_num_range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random_num_range(3,13));

// Задание 8
console.log(new Date());

// Задание 9
let currentDate = new Date()
let day73 = 73 * 24 * 60 * 60 * 1000
console.log(new Date(+currentDate + day73));

// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

function get_date(date) {
    let full_date = `Дата: ${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${days[date.getDay()]}
Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    console.log(full_date);

}

get_date(new Date())