// Задание 1
let password = 'пароль';
let input = prompt('Введите пароль');
if (password === input){
    alert('Пароль введен верно');
}
else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = 8
function check_c(c) {
    if (c > 0 && c < 10) {
        alert('Верно');
    } else {
        alert('Неверно');
    }
}
check_c(c);
c = 0;
check_c(c);
c = 10;
check_c(c);
c = -3;
check_c(c);
c = 2;
check_c(c);

// Задание 3
let d = 75
let e = 101
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно')
}

// Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);

// Задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 3:
        alert('Это месяц Зимы');
        break;

    case 4:
    case 5:
    case 6:
        alert('Это месяц Весны');
        break;

    case 7:
    case 8:
    case 9:
        alert('Это месяц Лета');
        break;

    case 10:
    case 11:
    case 12:
        alert('Это месяц Осени');
        break;

    default:
        alert('Нет такого месяца');
        break;
}