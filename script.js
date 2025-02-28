// Secuencia de entrada para las cards con más énfasis
anime.timeline({ easing: 'easeOutExpo' })
    .add({
        targets: '.card',
        opacity: [0, 1],
        translateY: [-100, 0],
        rotate: [-45, 0],
        delay: anime.stagger(200), // Para animar cada card con un pequeño retraso
        scale: [0, 1], // Inicialmente más pequeño y luego crece
    });

// Función para animar las barras de resumen
function updateBars(plan) {
    let velocidad = 0;
    let almacenamiento = 0;
    let usuarios = 0;

    // Cambiar los valores de las barras según el plan seleccionado
    switch (plan) {
        case 'A':
            velocidad = 40;
            almacenamiento = 30;
            usuarios = 20;
            break;
        case 'B':
            velocidad = 70;
            almacenamiento = 60;
            usuarios = 50;
            break;
        case 'C':
            velocidad = 90;
            almacenamiento = 80;
            usuarios = 70;
            break;
        default:
            velocidad = 0;
            almacenamiento = 0;
            usuarios = 0;
    }

    // Actualizar las barras con animación
    anime({
        targets: '#velocidad',
        width: `${velocidad}%`,
        duration: 1000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '#almacenamiento',
        width: `${almacenamiento}%`,
        duration: 1000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '#usuarios',
        width: `${usuarios}%`,
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}

// Interacción de tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Cambia la tarjeta activa
        const selectedCard = document.querySelector('.selected');
        if (selectedCard) {
            selectedCard.classList.remove('selected');
        }
        card.classList.add('selected');

        // Obtener el plan seleccionado
        const plan = card.getAttribute('data-plan');
        
        // Actualizar las barras con el plan seleccionado
        updateBars(plan);

        // Agregar animación de rebote al hacer clic
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
