$(document).ready(function(){
    // $("#setCookie").click(function (e) {
    //     e.preventDefault();
    //     $.cookie("pop-up", "", { expires:0, path: '/' });
    //     $("#pop-up__background").hide();
    // });

    // if ( $.cookie("pop-up") == null )
    // {
    //     setTimeout(function(){
    //         $("#pop-up__background").show();
    //     }, 4000)
    // }
    // else { $("#pop-up__background").hide();
    // }
});

let closePopup = document.querySelector('.close');
let popUp = document.querySelector('.pop-up-wrapper')

closePopup.addEventListener('click', function (e){
    e.preventDefault();
    popUp.style.display = 'none';
});

let openModal = document.querySelectorAll('.terms-link');
let modal = document.querySelector('.terms-pop-up__background');
let closeModal = document.querySelector('.terms-pop-up__close');
let bodyElement = document.querySelector('body');

if (openModal){
    openModal.forEach(button => button.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
        bodyElement.style.overflow = 'hidden';
    }))
}
if (closeModal){
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        bodyElement.style.overflow = 'unset';
    });
}
// if (modalBackground){
//     modalBackground.addEventListener('click', function (e) {
//         modal.style.display = 'none';
//         modalBackground.style.display = 'none';
//     });
// }




let openMobileMenu = document.querySelector('.header__mobile-menu-icon');
let menu = document.querySelector('.header__mobile-menu');
let header = document.querySelector('header');
let headerLogo = document.querySelector('.header__logo > a');
let headerText = document.querySelector('.header__mobile-text');

openMobileMenu.addEventListener('click', function () {
    menu.classList.toggle('open-menu');
    header.classList.toggle('active');
    headerLogo.classList.toggle('active');
    headerText.classList.toggle('active');
    if (header.classList.contains('active')){
        bodyElement.style.overflow = 'hidden';
    } else {
        bodyElement.style.overflow = 'unset';
    }
});

let openSubMenuLink = document.querySelector('.header__mobile-menu-loan');
let openSubMenu = document.querySelector('.header__mobile-submenu');

if (openSubMenuLink){
    openSubMenuLink.addEventListener('click', function (e){
        e.preventDefault();
        openSubMenuLink.classList.toggle('active');
        openSubMenu.classList.toggle('open-sub-menu');
    });
}





    let showFormButton = document.querySelector('.open-form__button');
    let showForm = document.querySelector('.mobile-form__form');
    let cancelForm = document.querySelector('.mobile-form__form-cancel');

    if (showFormButton){
        showFormButton.addEventListener('click', function () {
            showForm.classList.add('open-form');
        });
    }
    if (cancelForm) {
        cancelForm.addEventListener('click', function () {
            showForm.classList.remove('open-form');
        });
    }







