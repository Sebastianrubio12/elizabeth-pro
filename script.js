/**
 * ============================================================================
 * LÓGICA PRINCIPAL (TEXTOS Y AUDIO)
 * ============================================================================
 */

// Array con frases románticas (renovadas: más originales y variadas)
const frases = [
    "Buenos días a la persona que vuelve bonito hasta lo más simple. Empieza tu día sabiendo que alguien te admira muchísimo.",
    "Me gusta cómo piensas, cómo le das vueltas a una idea hasta entenderla. Esa cabeza de ingeniera tuya es de las cosas que más amo de ti.",
    "Hoy te deseo un día amable: que las cosas te salgan, que te rías fuerte y que, pase lo que pase, sepas que estoy de tu lado.",
    "No necesito ocasiones especiales para pensar en ti. Un martes cualquiera también es un buen día para recordarte que te amo.",
    "Eres de las pocas personas con quienes el silencio también es bonito. Contigo hasta no hacer nada se siente como estar en casa.",
    "Que hoy te acuerdes de lo capaz que eres. Tu disciplina y tu talento no son casualidad, son tuyos, y van a llevarte lejos.",
    "Te admiro como admiras tú a Chopper: por ese corazón enorme que cuida a todos. Tú tienes el mismo, y por eso me tienes rendido.",
    "Me encanta la forma en que cuidas lo que te importa. Nunca había sentido un cariño tan tranquilo y tan seguro como el tuyo.",
    "Si hoy el día viene pesado, respira: no tienes que poder con todo de una vez. Ve paso a paso, que yo te acompaño en cada uno.",
    "Admiro que persigas lo que quieres sin pedir permiso. Vas a lograr todo lo que te propongas, y yo quiero estar ahí para verlo.",
    "Te amo en lo cotidiano: en cómo saludas, en tus manías, en tu manera de contar las cosas. Lo ordinario contigo me fascina.",
    "Hay días en que solo quiero agradecerte por existir y por elegir compartir tu tiempo conmigo. Hoy es uno de esos días.",
    "Eres mi Ladybug: la que aparece y, con su magia, convierte un día gris en uno que vale la pena. Gracias por salvarme tantos.",
    "Que tengas un día con pausas, con buenos momentos y con la certeza de que alguien piensa en ti con una sonrisa.",
    "Me quedo con tu risa real, esa que te sale sin querer. Podría reconocerla entre mil y seguiría siendo mi favorita.",
    "Confío en nosotros: en lo que construimos con calma, sin prisa. Como una buena aventura de One Piece, lo mejor está por venir.",
    "Hoy quiero recordarte que eres suficiente tal como eres. No tienes que demostrar nada para que yo te admire por completo.",
    "Cada conversación contigo me deja pensando. Eres curiosa, aguda y honesta, y eso me parece tremendamente atractivo.",
    "Ojalá tu día tenga más de lo que te hace bien y menos de lo que te cansa. Y al final, un rato para ti, que te lo mereces.",
    "Sueño despierto con ese viaje que haremos: caminar contigo por Francia, sin afán, viendo todo. Qué suerte imaginarlo a tu lado.",
    "No eres mi mundo entero, eres algo mejor: la persona con quien quiero compartir el mundo que cada uno va construyendo.",
    "Tu esfuerzo de hoy es semilla de lo que vendrá. Sigue, que lo estás haciendo increíble aunque a veces no lo notes.",
    "Eres tierna como tu Hello Kitty favorita, pero con un carácter y una inteligencia que me desarman. Esa mezcla me encanta.",
    "Si pudiera, te mandaría hoy una tarde tranquila, de esas que no piden nada. Te la mereces más de lo que crees.",
    "Me encanta que seamos equipo: que podamos hablar de lo difícil sin miedo y resolver juntos. Eso para mí es amor del bueno.",
    "Hoy pensé en algo que dijiste hace días y me volví a reír solo. Tienes ese efecto, te quedas rondando en mis pensamientos.",
    "Eres paciente donde yo soy impaciente y valiente donde yo dudo. Juntos nos equilibramos, y así me gusta.",
    "Nada de lo que pase hoy opaca lo que vales. Y si alguien lo intenta, recuerda que acá tienes a quien te ve brillar sin esfuerzo.",
    "No busco una versión perfecta de ti; me gusta la real, con sus días buenos y malos. A esa es a la que elijo cada mañana.",
    "Te amo sin ruido, de esa manera estable que no necesita gritarse. Solo quería que hoy lo tuvieras presente.",
    "Me inspira cómo no te rindes. Verte intentar de nuevo, aun cansada, me recuerda la clase de persona increíble que eres.",
    "Ojalá hoy te pase algo pequeño y lindo: una buena noticia, un gesto amable, un rato de calma. Te lo deseo de corazón.",
    "Contigo aprendí que querer bien también es dar espacio. Te admiro, te cuido y confío en ti, y eso me hace muy feliz.",
    "Eres mi lugar favorito para volver después de un día largo. No importa cómo venga el mundo, contigo respiro distinto.",
    "Que hoy te trates con la misma dulzura con la que tratas a los demás. Nadie merece tu cariño más que tú misma.",
    "Me gustaría estar para una tarde de series animadas contigo, de esas en que comentamos todo. Son mis planes favoritos.",
    "Tu inteligencia me enamora tanto como tu ternura. Es raro y hermoso encontrar las dos cosas juntas, y las encontré en ti.",
    "Hoy solo quería decirte lo evidente para mí: me haces bien. Así de simple y así de grande.",
    "Pase lo que pase hoy, hay algo que no cambia: estoy orgulloso de ti y agradecido de caminar esto contigo.",
    "Que tu día tenga buena música, buenas pausas y la tranquilidad de saber que, aquí, alguien te quiere tal como eres."
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

// Inicializa las funciones al cargar la ventana
window.onload = () => {
    mostrarFraseDelDia();
};


/**
 * ============================================================================
 * EFECTO ESPACIAL / PARALLAX (como los fondos de pantalla del iPhone)
 * - En celular: usa el giroscopio (inclinar el teléfono mueve las capas).
 * - En computador: usa la posición del mouse.
 * Actualiza las variables CSS --tx y --ty (rango -1 a 1).
 * ============================================================================
 */
(function iniciarParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const RANGO_GRADOS = 20;   // Grados de inclinación para llegar al máximo
    const SUAVIZADO = 0.08;    // Entre más bajo, más suave el movimiento

    let objetivoX = 0, objetivoY = 0;
    let actualX = 0, actualY = 0;
    let baseBeta = null, baseGamma = null;
    let giroscopioActivo = false;

    const limitar = (v) => Math.max(-1, Math.min(1, v));

    // Bucle de animación con interpolación suave
    function animar() {
        actualX += (objetivoX - actualX) * SUAVIZADO;
        actualY += (objetivoY - actualY) * SUAVIZADO;
        root.style.setProperty('--tx', actualX.toFixed(4));
        root.style.setProperty('--ty', actualY.toFixed(4));
        requestAnimationFrame(animar);
    }
    requestAnimationFrame(animar);

    // --- Giroscopio (celular) ---
    function alOrientar(e) {
        if (e.beta === null || e.gamma === null) return;
        giroscopioActivo = true;

        // La primera lectura se toma como posición "neutral"
        if (baseBeta === null) { baseBeta = e.beta; baseGamma = e.gamma; }

        // La posición neutral se re-centra lentamente (como en iPhone)
        baseBeta += (e.beta - baseBeta) * 0.005;
        baseGamma += (e.gamma - baseGamma) * 0.005;

        objetivoX = limitar((e.gamma - baseGamma) / RANGO_GRADOS);
        objetivoY = limitar((e.beta - baseBeta) / RANGO_GRADOS);
    }

    function activarGiroscopio() {
        window.addEventListener('deviceorientation', alOrientar);
    }

    const necesitaPermiso = typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function';

    if (necesitaPermiso) {
        // iPhone: el permiso solo se puede pedir tras un toque del usuario
        const pedirPermiso = () => {
            DeviceOrientationEvent.requestPermission()
                .then((estado) => { if (estado === 'granted') activarGiroscopio(); })
                .catch(() => {});
            document.removeEventListener('click', pedirPermiso);
            document.removeEventListener('touchend', pedirPermiso);
        };
        document.addEventListener('click', pedirPermiso);
        document.addEventListener('touchend', pedirPermiso);
    } else if ('DeviceOrientationEvent' in window) {
        activarGiroscopio(); // Android
    }

    // --- Mouse (computador) ---
    window.addEventListener('mousemove', (e) => {
        if (giroscopioActivo) return;
        objetivoX = limitar((e.clientX / window.innerWidth) * 2 - 1);
        objetivoY = limitar((e.clientY / window.innerHeight) * 2 - 1);
    });
    document.addEventListener('mouseleave', () => {
        if (giroscopioActivo) return;
        objetivoX = 0; objetivoY = 0;
    });
})();
