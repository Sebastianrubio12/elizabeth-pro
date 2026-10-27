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

// Lógica de música
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

function mostrarFraseDelDia() {
    const hoy = new Date();
    const semilla = hoy.getFullYear() + hoy.getMonth() + hoy.getDate();
    const indiceFrase = semilla % frases.length;

    document.getElementById('quote-text').innerText = `"${frases[indiceFrase]}"`;

    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').innerText = hoy.toLocaleDateString('es-ES', opcionesFecha);
}

// Generador de tulipanes SVG animados tipo crayón
function generarTulipanes() {
    const container = document.getElementById('garden-container');
    const numTulipanes = 12 + Math.floor(Math.random() * 8); // Entre 12 y 20 tulipanes

    // Filtro SVG para textura rugosa (crayón/lápiz)
    const defsSVG = `
        <svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
            <defs>
                <filter id="crayon-texture" x="0" y="0" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>
        </svg>
    `;
    container.insertAdjacentHTML('beforeend', defsSVG);

    // Paleta de colores para los pétalos
    const colores = ['#FF6B6B', '#FFA07A', '#FFD700', '#FF69B4', '#FFB6C1'];

    for (let i = 0; i < numTulipanes; i++) {
        const left = Math.random() * 90 + 5; // 5% a 95%
        const scale = 0.6 + Math.random() * 0.6; // 0.6x a 1.2x
        const delayDraw = Math.random() * 2; // Retraso en inicio de dibujo
        const delayFill = delayDraw + 1.5 + Math.random() * 1; // Retraso en llenado
        const color = colores[Math.floor(Math.random() * colores.length)];
        const talloHeight = 100 + Math.random() * 100;

        // Coordenadas para el tulipán
        const svgHeight = talloHeight + 100;

        const tulipDiv = document.createElement('div');
        tulipDiv.className = 'tulip-svg sway';
        tulipDiv.style.left = `${left}%`;
        tulipDiv.style.setProperty('--scale', scale);
        tulipDiv.style.zIndex = Math.floor(scale * 10); // Los más grandes al frente

        const tulipHTML = `
            <svg width="100" height="${svgHeight}" viewBox="0 0 100 ${svgHeight}"
                 style="filter: url(#crayon-texture);" xmlns="http://www.w3.org/2000/svg">
                <!-- Tallo -->
                <path class="draw-path" d="M 50 ${svgHeight} Q 40 ${svgHeight - talloHeight/2} 50 80"
                      stroke="#4CAF50" stroke-width="4" style="animation-delay: ${delayDraw}s;"></path>

                <!-- Hoja Izquierda -->
                <path class="draw-path" d="M 50 ${svgHeight - talloHeight*0.7} Q 20 ${svgHeight - talloHeight*0.8} 30 ${svgHeight - talloHeight*0.4}"
                      stroke="#4CAF50" stroke-width="3" style="animation-delay: ${delayDraw + 0.5}s;"></path>
                <path class="fill-path" d="M 50 ${svgHeight - talloHeight*0.7} Q 20 ${svgHeight - talloHeight*0.8} 30 ${svgHeight - talloHeight*0.4} Q 45 ${svgHeight - talloHeight*0.5} 50 ${svgHeight - talloHeight*0.7}"
                      fill="#4CAF50" style="animation-delay: ${delayFill}s;"></path>

                <!-- Hoja Derecha -->
                <path class="draw-path" d="M 50 ${svgHeight - talloHeight*0.5} Q 80 ${svgHeight - talloHeight*0.6} 70 ${svgHeight - talloHeight*0.2}"
                      stroke="#4CAF50" stroke-width="3" style="animation-delay: ${delayDraw + 0.7}s;"></path>
                <path class="fill-path" d="M 50 ${svgHeight - talloHeight*0.5} Q 80 ${svgHeight - talloHeight*0.6} 70 ${svgHeight - talloHeight*0.2} Q 55 ${svgHeight - talloHeight*0.3} 50 ${svgHeight - talloHeight*0.5}"
                      fill="#4CAF50" style="animation-delay: ${delayFill}s;"></path>

                <!-- Cabeza de la flor (Contornos) -->
                <!-- Pétalo Central Posterior -->
                <path class="draw-path" d="M 50 80 Q 35 20 50 10 Q 65 20 50 80"
                      stroke="${color}" stroke-width="3" style="animation-delay: ${delayDraw + 1}s;"></path>
                <path class="fill-path" d="M 50 80 Q 35 20 50 10 Q 65 20 50 80"
                      fill="${color}" style="animation-delay: ${delayFill + 0.2}s;"></path>

                <!-- Pétalo Izquierdo -->
                <path class="draw-path" d="M 50 80 C 20 70, 10 30, 30 20 C 35 35, 45 40, 50 80"
                      stroke="${color}" stroke-width="3" style="animation-delay: ${delayDraw + 1.2}s;"></path>
                <path class="fill-path" d="M 50 80 C 20 70, 10 30, 30 20 C 35 35, 45 40, 50 80"
                      fill="${color}" style="animation-delay: ${delayFill + 0.4}s;"></path>

                <!-- Pétalo Derecho -->
                <path class="draw-path" d="M 50 80 C 80 70, 90 30, 70 20 C 65 35, 55 40, 50 80"
                      stroke="${color}" stroke-width="3" style="animation-delay: ${delayDraw + 1.4}s;"></path>
                <path class="fill-path" d="M 50 80 C 80 70, 90 30, 70 20 C 65 35, 55 40, 50 80"
                      fill="${color}" style="animation-delay: ${delayFill + 0.6}s;"></path>
            </svg>
        `;

        tulipDiv.innerHTML = tulipHTML;
        container.appendChild(tulipDiv);
    }
}

window.onload = () => {
    mostrarFraseDelDia();
    generarTulipanes();
};
