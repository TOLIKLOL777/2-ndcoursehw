const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    },
    {
        question: "Сколько месяцев в году?",
        options: ["1. 12", "2. 11", "3. 10"],
        correctAnswer: 1
    }
];

function random_num(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guess_number() {
    let answer = random_num(1, 100)
    let user_num = Number(prompt("Напишите любое число"))
    while (true) {
        if (user_num < answer) {
            user_num = prompt("Ваше число меньше ответа")
        } else if (user_num > answer) {
            user_num = prompt("Ваше число больше ответа")
        } else if (user_num == answer) {
            alert("Поздравляю вы выйграли!")
            break
        }
    }
}

function arifmetics() {
    let num1 = random_num(1,30)
    let num2 = random_num(1,30)
    let task = random_num(1,4) // 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление
    let answer

    if (task == 1) {
        answer = num1 + num2
    }
    if (task == 2) {
        answer = num1 - num2
    }
    if (task == 3) {
        answer = num1 * num2
    }
    if (task == 4) {
        while (true) {
            if (num1 % num2 == 0){
                answer = num1 / num2
                break
            } else {
                num1 = random_num(1,30)
                num2 = random_num(1,30)
                continue
            }
        }
    }
    const symbols = {
        1: "+",
        2: "-",
        3: "*",
        4: "/"
    }

    let user_answer = prompt(`Напиши ответ на эту задачу: ${num1} ${symbols[task]} ${num2}`)

    if (parseInt(user_answer) == answer) {
        alert("Молодец! Ответ верный")
    } else {
        alert(`Ответ не верный. Правильный ответ: ${answer}`)
    }
}

function turn_text() {
    let user_word = prompt(`Напиши любой текст и я его переверну`)
    alert(`Твой перевёрнутый текст ${user_word.split('').reverse().join('')}`)
}

function quiz_game() {
    let question_num = 1;
    let correct_count = 0;
    alert(`Тебе нужно будет ответить на несколько вопросов`);
    quiz.forEach(question_index => {
        let user_answer = prompt(`${question_num} вопрос: ${question_index.question}
Варианты ответа ${question_index.options} (Введите порядковый номер ответа)`);
        if (user_answer == question_index.correctAnswer) {
            alert("Правильно");
            correct_count++;
        } else {
            alert("Неправильно");
        }
    });
    alert(`Квиз окончен. Ваш результат ${correct_count} из ${quiz.length}`)
}

function rock_paper_scissor() {
    const vars = ["камень", "ножницы", "бумага"]
    let user_var = prompt("Выбирай! Камень, ножницы или бумага?")
    let computer_var = vars[random_num(1,3) - 1]
    
    if (user_var.toLowerCase() == computer_var) {
        alert(`У меня ${computer_var}. Ничья`)
    } else if ((user_var.toLowerCase() == "камень") && (computer_var == "ножницы")) {
        alert(`У меня ${computer_var}. Ты выйграл`)
    } else if ((user_var.toLowerCase() == "камень") && (computer_var == "бумага")) {
        alert(`У меня ${computer_var}. Ты проиграл`)
    } else if ((user_var.toLowerCase() == "бумага") && (computer_var == "ножницы")) {
        alert(`У меня ${computer_var}. Ты проиграл`)
    } else if ((user_var.toLowerCase() == "бумага") && (computer_var == "камень")) {
        alert(`У меня ${computer_var}. Ты выйграл`)
    } else if ((user_var.toLowerCase() == "ножницы") && (computer_var == "камень")) {
        alert(`У меня ${computer_var}. Ты проиграл`)
    } else if ((user_var.toLowerCase() == "ножницы") && (computer_var == "бумага")) {
        alert(`У меня ${computer_var}. Ты выйграл`)
    } else {
        alert('Напиши камень, ножницы или бумага')
    }
}

function random_color() {
    const background_catalog = document.querySelector(".catalog")
    const background_games = document.querySelector(".games")
    let red_color = random_num(0,255)
    let green_color = random_num(0,255)
    let blue_color =  random_num(0,255)
    background_catalog.style.backgroundColor = `rgb(${red_color}, ${green_color}, ${blue_color})`
    background_games.style.backgroundColor = `rgb(${red_color}, ${green_color}, ${blue_color})`
}