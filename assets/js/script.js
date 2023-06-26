let animationLink = document.querySelector('.download-page__button');

animationLink.onclick = function (){
    animationLink.classList.add('active');
    setTimeout(function(){
        animationLink.classList = 'download-page__button'
    }, 1000)
}

