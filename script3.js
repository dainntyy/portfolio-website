const ukButton = document.getElementById('uk-button');
const enButton = document.getElementById('en-button');

// Отримуємо всі елементи, які містять багатомовні тексти
        const langElements = document.querySelectorAll('[data-lang-uk]');

        // Функція для перемикання мови
        function switchLanguage(language) {
            langElements.forEach(element => {
                if (language === 'uk') {
                    element.textContent = element.getAttribute('data-lang-uk');
                } else if (language === 'en') {
                    element.textContent = element.getAttribute('data-lang-en');
                }
            });
        }

        // Додаємо обробники подій для кнопок
        ukButton.addEventListener('click', () => switchLanguage('uk'));
        enButton.addEventListener('click', () => switchLanguage('en'));