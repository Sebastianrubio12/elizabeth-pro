/**
 * ============================================================================
 * LÓGICA PRINCIPAL (TEXTOS Y AUDIO)
 * ============================================================================
 */

// Array con las 40 frases románticas
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
    "Te amo por lo que eres, por lo que me impulsas a ser y por todo lo hermoso que construiremos juntos. ¡Que tengas un día maravilloso!",
    "No necesito un traje de superhéroe para sentirme invencible, solo necesito ver que sonríes cuando te preparo tu Milo.",
    "Si nuestra historia fuera un anime, sin duda serías esa heroína valiente e inteligente que siempre salva mi corazón.",
    "Prometo cuidarte y quererte en todas las realidades de este multiverso, incluso si en alguna no nos gusta el queso con helado.",
    "Verte estudiar y esforzarte por ser ingeniera me llena de orgullo; para mí, ya eres la mente más brillante de esta ciudad.",
    "Quiero que nuestro próximo viaje no solo sea al sofá para ver películas en familia, sino directo a caminar juntos por París.",
    "Eres más dulce que cualquier jugo de mango en leche y más mágica que cualquier miraculous que Ladybug pudiera usar.",
    "Me encanta cómo me haces reír y pensar al mismo tiempo; eres mi capítulo favorito de la vida real.",
    "Cada vez que veo un tulipán me acuerdo de ti, de tu belleza única y de lo mucho que quiero hacer florecer nuestro amor cada día.",
    "Contigo hasta el chicharrón con frijoles sabe a cena de cinco estrellas, porque la mejor compañía eres tú.",
    "Ese futuro en el que somos nosotros dos formando nuestra propia familia es el proyecto más hermoso que la vida me ha dado."

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
