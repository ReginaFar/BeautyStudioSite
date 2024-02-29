const signUp = document.querySelector('.sign-up');
const signUpWindow = document.querySelector('.sign-up__window');
const signUpButton = document.querySelectorAll('.top__left__button');
const closeButton = document.querySelector('.sign-up__window__close')
        
signUpButton.forEach((button) => { 
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        signUpWindow.classList.add('active'); // Добавляем класс 'active' для фона
        signUp.classList.add('active');
    });
});

closeButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    signUp.classList.remove('active'); // Убираем активный класс с фона
    signUpWindow.classList.remove('active'); // И с окна
});