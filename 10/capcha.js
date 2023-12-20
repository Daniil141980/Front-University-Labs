var out = ""

$(document).ready(function(){
    out = generateRandomRussianString(5);
    $("#capcha").html(out);


    $('form').submit(function(e){
        e.preventDefault(); // предотвращаем отправку формы по умолчанию
        checkInput();
    });
});

function checkInput(){
    var inputText = $('input[type="text"]').val(); // получаем значение текстового input
    if (isEmpty(inputText)) {
        alert('Пожалуйста введите текст');
        return;
    }

    console.log(inputText);
    console.log(out);

    if (inputText == out){
        alert("Вы молодцы")
    }
    else{
        var captcha = generateNumbersCaptcha();
        $("#capcha").html(captcha.num1 + ' + ' + captcha.num2 + ' = ');
        out = captcha.sum;
    }
}

function isEmpty(text){
    if (text === '')
        return true;

    return false;
}

function generateNumbersCaptcha() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    return {num1: num1, num2: num2, sum: num1 + num2};
}

function generateRandomRussianString(length) {
    var upperCaseLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    var lowerCaseLetters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    var randomString = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * upperCaseLetters.length);
        if (Math.random() < 0.5) {
            randomString += upperCaseLetters.charAt(randomIndex);
        } else {
            randomString += lowerCaseLetters.charAt(randomIndex);
        }
    }
    return randomString;
}