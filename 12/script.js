document.addEventListener('DOMContentLoaded', function () {
    const notificationContainer = document.querySelector('.notification-container');
    const notificationCounter = document.getElementById('notification-counter');
    const notificationContent = document.querySelector('.notification-content');

    let notificationCount = 0;
    let isCounting = true;

    function showNotification() {
        if (isCounting) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = 'На твой телефон пришло новое сообщение';
            notificationContent.appendChild(notification);
            notificationCount++;
            updateCounter();

            // Скрытие уведомления через 1.5 секунды
            setTimeout(() => {
                notificationContent.removeChild(notification);
            }, 3000);
        }
    }

    function updateCounter() {
        notificationCounter.textContent = notificationCount;
    }

    setInterval(showNotification, 3000);

    function debounce(func, wait) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, arguments);
            }, wait);
        };
    }

    const delayedShowNotification = debounce(() => {
        isCounting = true;
    }, 5000);

    notificationContainer.addEventListener('click', function () {
        notificationContent.style.display = notificationContent.style.display === 'block' ? 'none' : 'block';
        if (notificationCount > 0) {
            isCounting = false;
            delayedShowNotification();
        }
        notificationCount = 0;
        updateCounter();
    });
});

function createList() {
    const dynamicList = document.getElementById('dynamic-list');
    let listItemContent;

    do {
        listItemContent = prompt('Введите артикул товара:');
        if (listItemContent !== null && listItemContent.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = listItemContent;
            listItem.style.color = "#FFFFFF";
            dynamicList.appendChild(listItem);
        }
    } while (listItemContent !== null && listItemContent.trim() !== '');
}
