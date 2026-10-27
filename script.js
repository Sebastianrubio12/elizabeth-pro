/**
 * Arreglo de frases románticas.
 * Se elige una diferente cada día basada en la fecha actual.
 */
const frases = [
    "¿Quién diría que la mezcla de queso con helado y chocolate se parece tanto a nosotros? Una locura inesperada, pero absolutamente perfecta.",
    "Espero que hoy tengas un día tan espectacular como un buen plato de frijoles con chicharrón. ¡A comerte el mundo, hermosa!",
    "Eres mi momento de paz: tan dulce y reconfortante como un vaso de Milo con pura leche.",
    "Ni siquiera Doctor Strange podría encontrar un universo alterno donde yo no esté locamente enamorado de ti.",
    "Nuestro amor es el verdadero One Piece, y no hay mejor aventura que navegar la vida a tu lado.",
    "¡Prodigiosa Ladybug! Siempre encuentras la manera de usar tu magia para salvar mis días y llenarlos de color.",
    "Eres la Monica de mi Chandler: pones orden en mi caos, eres mi refugio y mi mejor amiga.",
    "A veces me siento como Leonard viendo a Penny: completamente fascinado por la ingeniera tan increíble que tengo enfrente.",
    "Como Peter Parker y Mary Jane, nosotros estamos destinados a cuidarnos y amarnos en cualquier multiverso.",
    "No hay nada que disfrute más que acurrucarme contigo en un día frío a ver nuestras series animadas favoritas.",
    "Me inspira muchísimo tu sed de superación. Sé que te convertirás en la ingeniera más brillante de todas.",
    "Cierra los ojos e imagina: nosotros, caminando por las calles de Francia, tomados de la mano. Ese es el futuro que quiero contigo.",
    "Admiro profundamente lo mucho que valoras el tiempo de películas con tus papás. Tienes el corazón más puro que conozco.",
    "Gracias por enseñarme cada día lo que es la responsabilidad afectiva. A tu lado, el amor se siente seguro, libre y en paz.",
    "Me hace mucha ilusión pensar en la familia que construiremos algún día. Contigo, cualquier sueño parece posible.",
    "El clima frío solo tiene un propósito en este mundo: darnos la excusa perfecta para llenarnos de abrazos.",
    "Si plantara un tulipán por cada vez que me haces sonreír, tendríamos un jardín inmenso solo para nosotros.",
    "Que este día esté lleno de éxitos y pequeños momentos que te hagan tan feliz como tú me haces a mí.",
    "Un jugo de mango en leche para refrescar la tarde, y tu mirada para alegrarme la vida entera.",
    "Adoro cómo todo tiene que ser preparado en leche para ti, porque hasta en esos pequeños detalles encuentro razones para amarte más.",
    "Eres la protagonista de mi historia favorita, mucho más emocionante que cualquier capítulo de Friends o The Big Bang Theory.",
    "Cada esfuerzo que haces hoy en tu carrera, es un ladrillo más para ese futuro hermoso que nos espera. ¡Tú puedes con todo!",
    "A tu lado descubrí que los fines de semana perfectos son aquellos donde simplemente somos felices viendo películas en familia.",
    "Tienes una luz propia que opaca a cualquier estrella en el cielo. Sigue brillando así de fuerte, mi amor.",
    "Haces que la realidad sea mil veces mejor que cualquier mundo de ficción, superhéroes o series animadas.",
    "Hoy amanecí pensando en lo afortunado que soy por tener a una mujer tan inteligente, hermosa y determinada a mi lado.",
    "Respira profundo, confía en tu talento y da lo mejor de ti hoy. Yo estaré aquí, apoyándote incondicionalmente.",
    "Tu sonrisa tiene el superpoder de derretir cualquier tristeza y hacer que todo vuelva a iluminarse.",
    "Serás una ingeniera espectacular, una madre maravillosa y siempre, siempre, el amor de mi vida.",
    "Ojalá pudieras verte a través de mis ojos, para que entendieras por qué me tienes tan enamorado.",
    "Que la alegría te acompañe desde tu primer cafecito (o tu vaso de Milo) hasta que vuelvas a casa a descansar.",
    "Eres esa pieza del rompecabezas que no sabía que me faltaba, pero que ahora hace que todo tenga sentido.",
    "Amo tu forma de ver el mundo, tu empatía y esa madurez con la que siempre cuidas nuestro vínculo.",
    "Me encanta cuando te emocionas hablando de las cosas que te gustan. Podría escucharte horas sin cansarme.",
    "En ti encontré no solo a mi novia, sino a mi confidente, mi cómplice de aventuras y mi mayor motivación.",
    "No importa qué retos traiga este día, recuerda que somos un equipo y siempre estaré para sostener tu mano.",
    "Ojalá el tiempo se detuviera cada vez que estamos bajo las cobijitas, muertos de risa por cualquier tontería.",
    "Tienes el don de hacer que lo ordinario se vuelva extraordinario. Contigo, la vida es una celebración constante.",
    "Eres mi refugio en los días de lluvia y mi sol en las mañanas frías. Eres todo lo que siempre soñé.",
    "Te amo por lo que eres, por lo que me impulsas a ser y por todo lo hermoso que construiremos juntos. ¡Que tengas un día maravilloso!"
];

/**
 * Lógica para reproducir/pausar la música de fondo.
 */
const musicBtn = document.getElementById('music-control');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '🎵 Activar música';
    } else {
        bgMusic.play();
        musicBtn.innerHTML = '🎶 Pausar música';
    }
    isPlaying = !isPlaying;
});

/**
 * Animación de pulso al hacer clic en la luna.
 */
function pulseMoon() {
    const moon = document.getElementById('moon');
    moon.classList.remove('moon-pulse');
    // Forzar un reflow para reiniciar la animación
    void moon.offsetWidth;
    moon.classList.add('moon-pulse');
}

/**
 * Genera estrellas parpadeantes en posiciones aleatorias del cielo.
 */
function crearEstrellas() {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 70; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        // Posición aleatoria
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        // Tamaño aleatorio
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        // Velocidad y retraso de la animación
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(star);
    }
}

/**
 * Crea las flores neón en el fondo divididas en varias capas
 * para dar un efecto de profundidad.
 */
function crearJardinConProfundidad() {
    const container = document.getElementById('garden-container');

    // Configuración de las capas del jardín (fondo, medio, frente)
    const capas = [
        { cantidad: 15, escalaMin: 0.3, escalaMax: 0.5, blur: '3px', z: 2, talloMin: 100, talloMax: 150, delayMax: 5 },
        { cantidad: 12, escalaMin: 0.6, escalaMax: 0.8, blur: '1px', z: 4, talloMin: 140, talloMax: 200, delayMax: 4 },
        { cantidad: 8,  escalaMin: 0.9, escalaMax: 1.2, blur: '0px', z: 6, talloMin: 180, talloMax: 250, delayMax: 3 }
    ];

    capas.forEach(capa => {
        for (let i = 0; i < capa.cantidad; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-wrapper';
            // Distribución horizontal
            flower.style.left = (Math.random() * 96) + '%';
            flower.style.zIndex = capa.z;
            flower.style.filter = `blur(${capa.blur})`;

            // Variación de tamaño según la capa
            const escala = capa.escalaMin + Math.random() * (capa.escalaMax - capa.escalaMin);
            flower.style.setProperty('--scale', escala);

            // Tiempos de animación aleatorios
            flower.style.animationDelay = (Math.random() * capa.delayMax) + 's';
            flower.style.animationDuration = (4 + Math.random() * 4) + 's';

            // Altura aleatoria del tallo
            const altoTallo = capa.talloMin + Math.random() * (capa.talloMax - capa.talloMin);

            // Estructura HTML de cada flor
            flower.innerHTML = `
                <div class="flower-head">
                    <div class="petal"></div><div class="petal"></div>
                    <div class="petal"></div><div class="petal"></div>
                    <div class="petal"></div><div class="petal"></div>
                    <div class="petal"></div><div class="petal"></div>
                    <div class="center"></div>
                </div>
                <div class="stem-container">
                    <div class="leaf left"></div>
                    <div class="stem" style="--stem-h: ${altoTallo}px;"></div>
                    <div class="leaf right"></div>
                </div>
            `;
            container.appendChild(flower);
        }
    });
}

/**
 * Selecciona y muestra la frase correspondiente al día actual.
 */
function mostrarFraseDelDia() {
    const hoy = new Date();
    // Generar un número (semilla) basado en la fecha actual
    const semilla = hoy.getFullYear() + hoy.getMonth() + hoy.getDate();
    const indiceFrase = semilla % frases.length;

    // Mostrar la frase
    document.getElementById('quote-text').innerText = `"${frases[indiceFrase]}"`;

    // Mostrar la fecha formateada en español
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').innerText = hoy.toLocaleDateString('es-ES', opcionesFecha);
}

/**
 * Inicializar todo cuando la página termine de cargar
 */
window.onload = () => {
    mostrarFraseDelDia();
    crearEstrellas();
    crearJardinConProfundidad();
};
