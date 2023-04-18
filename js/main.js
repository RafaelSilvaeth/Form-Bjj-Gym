const wrapper = document.querySelector('.wrapper');
const logiLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> { 
    wrapper.classList.add('active');
});

logiLink.addEventListener('click', ()=> { 
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> { 
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> { 
    wrapper.classList.remove('active-popup');
});