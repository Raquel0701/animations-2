
/*Secuencia de entrada para las cards con más énfasis*/
anime.timeline({ easing: 'easeOutExpo' })
    .add({
        targets: '.card',
        opacity: [0, 1],
        translateY: [-100, 0],
        rotate: [-45, 0],
        delay: anime.stagger(200),
        scale: [0, 1],
    });

function animateBars() {
    anime({
        targets: '.fill',
        width: [
            { value: '10%', duration: 800 },
            { value: '90%', duration: 1500 },
            { value: '30%', duration: 1000 }
        ],
        easing: 'easeInOutQuad',
        loop: true,  
        direction: 'alternate',
        delay: anime.stagger(500),
        scale: [1, 1.2],
    });
}

animateBars();

/*Interacción de tarjetas con rebote*/
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('.selected').classList.remove('selected');
        card.classList.add('selected');
        
        document.querySelectorAll('.fill').forEach((fill, index) => {
            let newWidth = Math.random() * 100 + '%';
            anime({
                targets: fill,
                width: newWidth,
                duration: 1000,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: true
            });
        });

        anime({
            targets: card,
            scale: [1, 1.4, 1],
            translateY: [0, -20, 0],
            rotate: [0, 10, 0],
            duration: 500,
            easing: 'easeOutBounce'
        });
    });
});
