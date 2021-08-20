window.onload = function() {

    document.getElementById('hidden-animation').classList.remove('home-animation-opacity')

    var lines = new TimelineMax({repeat: -1, opacity:0})
        .from('.plan', 0.4, {x: -100, opacity:0})
        .to('.plan', 1, {x: '0%'})

        .from('.learn', 0.4, {x: -100, opacity:0})
        .to('.learn', 1, {x: '0%'})

        .from('.track', 0.4, {x: -100, opacity:0})
        .to('.track', 1, {x: '0%'})

        .from('.report', 0.4, {x: -100, opacity:0})
        .to('.report', 1, {x: '0%'})
}