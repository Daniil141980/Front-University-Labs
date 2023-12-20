document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    var outputElement = document.getElementById('output');

    // Создаем элемент изображения динамически
    var imageElement = document.createElement('img');
    imageElement.id = 'centered-image';
    imageElement.src = 'i.webp';
    imageElement.alt = 'Centered Image';
    container.appendChild(imageElement);

    // Функция для центрирования изображения на экране
    function centerImage() {
        // Рассчитываем центральные координаты
        var centerX = window.innerWidth / 2 - imageElement.width / 2;
        var centerY = window.innerHeight / 2 - imageElement.height / 2;

        imageElement.style.position = 'absolute';
        imageElement.style.top = centerY + 'px';
        imageElement.style.left = centerX + 'px';
    }

    // Обновляем позицию изображения при изменении размеров окна
    window.addEventListener('resize', centerImage);

    centerImage();

    container.addEventListener('click', function(event) {
        // Рассчитываем координаты относительно изображения
        var clickedX = event.clientX - imageElement.offsetLeft;
        var clickedY = event.clientY - imageElement.offsetTop;
        
        outputElement.innerHTML = 'Clicked coordinates: X = ' + clickedX + ', Y = ' + clickedY;
    });
});

var counter = 1;
var isPause = false;

function showNotification(message) {
    let screenWrapper = document.querySelector('.screen-wrapper');

    let notificationElement = document.createElement('div');
    notificationElement.id = 'notifi';
    notificationElement.innerHTML = message;

    let closeButton = document.createElement('button');
    closeButton.id = 'close-button';
    closeButton.innerHTML = '×';

    notificationElement.addEventListener('click', function(event) {
        var clickedElement = event.target;

        var elementId = clickedElement.id;

        if (elementId === 'notifi') {
            delayInvoke();
        }

        else if (elementId === 'close-button') {
            closeNotification(notificationElement);
        }
    });

    screenWrapper.appendChild(notificationElement);
    notificationElement.appendChild(closeButton);

    setTimeout(() => {notificationElement.style.opacity = 0;
        setTimeout(() => notificationElement.remove(),500)
    }, 1500);
}

function invokeNotification() {
    if(!isPause) {
        let message = 'Уведомление - ' + counter;
        counter++;
        showNotification(message);
    }
}

setInterval(invokeNotification, 3500);

function delayInvoke() {
    isPause = true;
    setTimeout(()=> isPause = false, 7000);
}

//2
function closeNotification(notificationElement) {
    notificationElement.remove();
}
