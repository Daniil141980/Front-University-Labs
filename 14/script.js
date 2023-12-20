document.addEventListener('DOMContentLoaded', function () {
    // Анимация изменения фона страницы
    const backgroundAnimation = document.getElementById('background-animation');
    let isColorChangeForward = true;

    function changeColor() {
        const colors = [
            { start: '#3498db', end: '#2c3e50' },
            { start: '#39123b', end: '#3498db' }
        ];

        if (isColorChangeForward) {
            backgroundAnimation.style.background = `linear-gradient(to bottom, ${colors[0].start}, ${colors[0].end})`;
        } else {
            backgroundAnimation.style.background = `linear-gradient(to bottom, ${colors[1].start}, ${colors[1].end})`;
        }

        isColorChangeForward = !isColorChangeForward;
    }

    setInterval(changeColor, 3000);

    // Анимация появления содержимого
    const content = document.getElementById('content');

    function fadeIn() {
        let opacity = 0;

        function showContent() {
            opacity += 0.1;
            content.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }

        const fadeInterval = setInterval(showContent, 200);
    }

    setTimeout(fadeIn, 3000); // через 2 секунды
});

