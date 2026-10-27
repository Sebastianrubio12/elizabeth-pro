/**
 * ============================================================================
 * LÓGICA PRINCIPAL (TEXTOS Y AUDIO)
 * ============================================================================
 */

// Array con las 40 frases románticas
const frases = [
    "Nuestra conexión es tan única y perfecta como esa mezcla loca de queso, helado y chocolate. ¡Me encantas demasiado!",
    "Espero que hoy tengas un día espectacular. Cómete el mundo hoy, mi amor, ¡que yo invito los frijoles con chicharrón!",
    "Eres mi momento de paz favorito: tan dulce y reconfortante como un buen vaso de Milo preparado con pura leche.",
    "Ni siquiera el mismísimo Doctor Strange podría encontrar un universo donde yo no esté locamente enamorado de ti.",
    "Nuestro amor es el verdadero One Piece. No hay mejor aventura en esta vida que navegarla a tu lado.",
    "¡Mi prodigiosa Ladybug! Siempre encuentras la manera de usar tu magia para salvar mis días y llenarlos de color.",
    "Eres la Monica de mi Chandler: pones orden en mi caos, eres mi refugio, mi complemento y mi mejor amiga.",
    "A veces me siento como Leonard mirando a Penny: completamente hipnotizado por la mujer e ingeniera tan increíble que tengo enfrente.",
    "Como Peter Parker y Mary Jane, nosotros estamos destinados a cuidarnos, apoyarnos y amarnos en cualquier multiverso.",
    "No hay ningún plan que disfrute más que acurrucarme contigo bajo las cobijitas en un día frío para ver nuestras series animadas.",
    "Me inspira muchísimo tu sed de superación. Sé que te vas a convertir en la ingeniera más brillante de todas, y yo estaré ahí para aplaudirte.",
    "Cierra los ojos e imagina: nosotros, caminando por las calles de Francia, tomados de la mano. Ese es el futuro que construyo contigo.",
    "Verte sonreír cuando te doy algo que te gusta, como un jugo de mango en leche, es de mis momentos favoritos del día.",
    "Gracias por enseñarme cada día lo que es la verdadera responsabilidad afectiva. A tu lado, el amor se siente seguro, libre y en paz.",
    "Me hace muchísima ilusión pensar en esa familia hermosa que construiremos algún día. Contigo todo lo bonito parece posible.",
    "Para mí, el clima frío solo tiene un propósito en este mundo: darnos la excusa perfecta para llenarnos de abrazos.",
    "Si plantara un tulipán por cada vez que me haces sonreír, tendríamos un jardín inmenso solo para nosotros dos.",
    "Que este día esté lleno de éxitos, sonrisas y pequeños detalles que te hagan tan feliz como tú me haces a mí todos los días.",
    "Un buen jugo de mango en leche para refrescar tu tarde, y tu mirada preciosa para alegrarme a mí la vida entera.",
    "Adoro cómo todo tiene que ser preparado en leche para ti, porque hasta en esas pequeñas mañas encuentro razones para amarte más.",
    "Eres la protagonista indiscutible de mi historia favorita, mucho más emocionante que cualquier capítulo de Friends o The Big Bang Theory.",
    "Cada esfuerzo que haces hoy en tu carrera es un paso más hacia ese futuro hermoso que nos espera. ¡Tú puedes con todo, mi ingeniera!",
    "A tu lado descubrí que los mejores fines de semana son esos donde simplemente nos quedamos bajo las cobijas viendo series.",
    "Tienes una luz propia que opaca a cualquier estrella en el cielo nocturno. Sigue brillando así de fuerte, mi princesa.",
    "Haces que mi realidad a tu lado sea mil veces mejor que cualquier mundo de ficción, superhéroes o series animadas.",
    "Hoy amanecí pensando en lo inmensamente afortunado que soy por tener a una mujer tan inteligente, hermosa y determinada a mi lado.",
    "Respira profundo, confía en tu talento y da lo mejor de ti hoy. Yo estaré aquí siempre, apoyándote de manera incondicional.",
    "Tu sonrisa tiene el superpoder de derretir cualquier tristeza y hacer que todo mi mundo vuelva a iluminarse de inmediato.",
    "Serás una ingeniera espectacular, una madre maravillosa y siempre, sin importar qué pase, el amor de mi vida.",
    "Ojalá pudieras verte tan solo un minuto a través de mis ojos, para que entendieras por qué me tienes tan perdidamente enamorado.",
    "Que la alegría y la paz te acompañen desde tu primer vaso de Milo matutino hasta que vuelvas a casa a descansar en mis brazos.",
    "Eres exactamente esa pieza del rompecabezas que no sabía que me faltaba, pero que ahora hace que toda mi vida tenga sentido.",
    "Amo tu forma de ver el mundo, tu empatía inmensa y esa madurez tan tuya con la que siempre cuidas nuestro vínculo.",
    "Me encanta cuando te emocionas hablando de las cosas que te apasionan. Podría escucharte horas enteras sin cansarme jamás.",
    "En ti encontré no solo a mi novia, sino a mi mayor confidente, mi cómplice de aventuras y la motivación de mis días.",
    "No importa qué retos traiga este día, recuerda que somos un equipo invencible y siempre estaré aquí para sostener tu mano.",
    "Ojalá el tiempo se detuviera cada vez que estamos bajo las cobijitas, muertos de risa por cualquier tontería que se nos ocurre.",
    "Tienes el don mágico de hacer que lo ordinario se vuelva extraordinario. Contigo, la vida es una celebración constante.",
    "Eres mi refugio más cálido en los días de lluvia y mi sol en las mañanas más frías. Eres todo lo que siempre soñé tener.",
    "Te amo por lo que eres, por lo que me impulsas a ser y por todo lo hermoso que vamos a construir juntos. ¡Que tengas un día maravilloso!",
    "No necesito ponerme un traje de superhéroe para sentirme invencible, solo necesito ver tu sonrisa cuando te preparo tu Milo.",
    "Si nuestra historia fuera un anime, sin duda serías esa heroína valiente, inteligente y hermosa que siempre salva mi corazón.",
    "Prometo cuidarte y quererte en absolutamente todas las realidades de este multiverso (incluso en las que no haya queso con helado).",
    "Verte estudiar, trasnochar y esforzarte por tu carrera me llena de orgullo; para mí, ya eres la mente más brillante de esta ciudad.",
    "Quiero que nuestro próximo gran viaje no solo sea al sofá para ver películas, sino directo a caminar juntos por las calles de Francia.",
    "Eres mil veces más dulce que cualquier jugo de mango en leche y más mágica que cualquier miraculous que Ladybug pudiera usar.",
    "Me encanta cómo me haces reír a carcajadas y reflexionar al mismo tiempo; definitivamente eres mi capítulo favorito de la vida real.",
    "Cada vez que veo un tulipán me acuerdo de ti, de tu belleza única y de lo mucho que quiero hacer florecer lo nuestro cada día.",
    "Contigo hasta un platito de chicharrón con frijoles sabe a cena de cinco estrellas en París, porque la mejor compañía siempre eres tú.",
    "Ese futuro en el que somos nosotros dos formando nuestra propia familia es, de lejos, el proyecto más hermoso que la vida me ha dado."
];

// Lógica de control de música
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

// Función para seleccionar la frase según el día actual
function mostrarFraseDelDia() {
    const hoy = new Date();
    // Usa la fecha como "semilla" para que la frase sea la misma durante todo el día
    const semilla = hoy.getFullYear() + hoy.getMonth() + hoy.getDate();
    const indiceFrase = semilla % frases.length;

    // Actualiza el texto de la tarjeta
    document.getElementById('quote-text').innerText = `"${frases[indiceFrase]}"`;

    // Formatea la fecha y la muestra
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').innerText = hoy.toLocaleDateString('es-ES', opcionesFecha);
}

// Para el efecto de escritura, si se desea
function animarTextoCrayon() {
    const quoteText = document.getElementById('quote-text');
    const text = quoteText.innerText;
    quoteText.innerText = '';
    quoteText.style.opacity = 1;

    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < text.length) {
            quoteText.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 30); // Velocidad de escritura
}

// Inicializa las funciones al cargar la ventana
window.onload = () => {
    mostrarFraseDelDia();

    // Pequeño retraso para que las flores y el cielo se dibujen primero
    setTimeout(() => {
        animarTextoCrayon();
    }, 3500);
};
