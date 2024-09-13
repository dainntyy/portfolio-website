const image1 = 'AINTA.jpeg';
const image2 = 'AINTA2.jpeg';

const imgElement = document.getElementById('image1');

// Додаємо обробник події натискання
imgElement.addEventListener('click', function () {
    // Отримуємо ім'я файлу зображення без шляху
    const currentImage = imgElement.src.split('/').pop();

    // Перевіряємо поточне зображення і змінюємо його
    if (currentImage === image1) {
        imgElement.src = './images/' + image2; // Змінюємо на друге зображення
    } else {
        imgElement.src = './images/' + image1; // Змінюємо назад на перше
    }

    // Додаємо/знімаємо клас для фліп ефекту
    imgElement.classList.toggle('flipped');
});
