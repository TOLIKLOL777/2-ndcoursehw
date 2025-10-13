// Задание 1
function min_num(a, b) {
    return Math.min(a, b)
};

console.log(min_num(1, 10));

// Задание 2
function even_or_odd(num) {
    if (num % 2 == 0) {
        console.log("Число четное")
    } else {
        console.log("Число нечетное")
    }
};

even_or_odd(10);

// Задание 3
function square(a) {
    return a**2
}

console.log(square(4))

// Задание 4
function age_ask(age) {
    if (age <= 0) {
        console.log("Вы ввели неправильное значение")
    } else if (age <= 12) {
        console.log("Привет, друг!")
    } else {
        console.log("Добро пожаловать!")
    }
}
age_ask(12)

// Задание 5
function check_nums(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Одно или оба значения не являются числом")
    } else {
        console.log(a * b)
    }
}
check_nums(1,2)

// Задание 6
function cube(n) {
    if (isNaN(n)) {
        console.log("Переданный параметр не является числом")
    } else {
        console.log(`${n} в кубе равняется ${n**3}`)
    }
}
cube(3)

// Задание 7
function getArea() {
    let area = 3.14 * (this.radius ** 2)
    console.log(`${this.name} имеет площадь ${area}`)
}

function getPerimeter() {
    let perimeter = 2 * 3.14 * this.radius
    console.log(`${this.name} имеет площядь ${perimeter}`)
}


const circle1 = {
   name: 'Кружочек',
   radius: 5,
   getArea: getArea,
   getPerimeter: getPerimeter
}

const circle2 = {
   name: 'Круглик',
   radius: 7,
   getArea: getArea,
   getPerimeter: getPerimeter
}