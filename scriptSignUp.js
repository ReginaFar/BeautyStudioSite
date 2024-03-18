const signUp = document.querySelector('.sign-up');
const signUpWindow = document.querySelector('.sign-up__window');
const signUpButton = document.querySelectorAll('.top__left__button');
const closeButton = document.querySelector('.sign-up__window__close')
        
signUpButton.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault();
        signUpWindow.classList.add('active');
        signUp.classList.add('active');
    });
});

closeButton.addEventListener('click',() => { 
    signUp.classList.remove('active'); 
    signUpWindow.classList.remove('active');
});