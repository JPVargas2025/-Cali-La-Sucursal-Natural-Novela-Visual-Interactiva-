// ==========================================
// 1. BASE DE DATOS Y GUIONES LITERALEA
// ==========================================
const gameData = {
    bienvenida: [
        {
            id: "img_1",
            title: "Escena 1",
            text: "¡Bienvenidos a Cali! La Sucursal del Cielo, un lugar donde la cultura y el arte son vida, y sus majestuosos ecosistemas son su sello personal.",
            audio: "aud/aud_1.mp3",
            image: "img/img_1.jpg",
            descripcion: "Vista panorámica de Cristo Rey abrazando a Cali con las montañas verdes de los Farallones al fondo y el atardecer caleño."
        },
        {
            id: "img_2",
            title: "Escena 2",
            text: "En Cali conviven más de 2.2 millones de caleños, rodeados de cientos de especies de animales, flores vibrantes, ríos cristalinos, una gastronomía única y el ritmo inconfundible de nuestra música.",
            audio: "aud/aud_2.mp3",
            image: "img/img_2.jpg",
            descripcion: "Imagen tipo collage o ilustración que mezcla la salsa, la gastronomía (chontaduro, lulada), la fauna colorida y la vegetación de los parques urbanos."
        },
        {
            id: "img_3",
            title: "Escena 3",
            text: "Por eso hoy, te invitamos a ser parte de esta aventura donde descubrirás la verdadera riqueza de nuestra fauna, flora y ríos. ¡Tu viaje por la Sucursal Natural comienza ahora!",
            audio: "aud/aud_3.mp3",
            image: "img/img_3.jpg",
            descripcion: "Ilustración de la entrada a un bosque tropical con los personajes (Catleya, Mango y Pancito) saludando a lo lejos."
        }
    ],
    pantallaInicio: {
        id: "img_x1",
        title: "Pantalla de Inicio",
        eslogan: "El lugar donde toda la vida es posible.",
        textoPantalla: "Bienvenido a Cali, la Sucursal Natural",
        audio: "aud/aud_z1.mp3",
        image: "img/logo.png",
        descripcion: "Fondo de los Farallones de Cali al atardecer con neblina suave."
    },
    modoRelato: [
        { id: "img_h1", title: "Introducción del Modo Relato", text: "¡Bienvenidos a Santiago de Cali, la Sucursal del Cielo! Una tierra vibrante con más de 2.2 millones de habitantes, hogar de miles de especies animales y un pulmón verde incalculable. Hoy hablaremos de los tesoros naturales más importantes que hacen de nuestra ciudad un paraíso de biodiversidad. ¡Y para conocerlos, tres guías muy especiales han venido a saludarte!", audio: "aud/aud_h1.mp3", image: "img/img_h1.jpg" },
        { id: "img_h2", title: "Catleya - Flora", text: "¡Hola! Yo soy Catleya, el espíritu de la flora caleña. Represento las hermosas flores y la vegetación que purifican nuestro aire. Un tip: cuando visites zonas verdes, evita arrancar las plantas nativas; ¡ellas sostienen todo nuestro ecosistema urbano!", audio: "aud/aud_h2.mp3", image: "img/img_h2.jpg" },
        { id: "img_h3", title: "Mango - Fauna", text: "¡Y hola a todos! Yo soy Mango, la tángara multicolor. Represento la fauna alegre de nuestros bosques y parques. ¡Aquí puedes encontrarnos volando libres, así que mantén silencio y observa con respeto!", audio: "aud/aud_h3.mp3", image: "img/img_h3.jpg" },
        { id: "img_h4", title: "Pancito - Ríos", text: "¡Hola, amigos! Yo soy Pancito, la voz de los ríos cristalinos que bajan desde los Farallones. Sin nosotros, la vida en el valle se apagaría. Hoy haremos un recorrido por 3 lugares imperdibles de cada categoría para que vengas a visitarnos y aprendas a cuidarnos.", audio: "aud/aud_h4.mp3", image: "img/img_h4.jpg" },
        { id: "img_h5", title: "1. Río Pance", text: "El Río Pance es el “gran gigante cristalino” de la ciudad. ¿Qué encuentras? balnearios naturales, aves ribereñas. ¡Cuidado! No dejes plásticos ni icopor; llévate tu basura.", audio: "aud/aud_h5.mp3", image: "img/img_h5.jpg" },
        { id: "img_h6", title: "1. Río Pance (Nacimiento)", text: "Nace a más de 3.800 metros de altura en los Farallones de Cali. Posee una cuenca principal de más de 4.000 hectáreas protegidas, siendo el principal afluente que oxigena el sur de la ciudad con un caudal cristalino de alta montaña.", audio: "aud/aud_h6.mp3", image: "img/img_h6.jpg" },
        { id: "img_h7", title: "2. Río Cali / Bellavista", text: "El Río Bellavista es un refugio de agua pura y vegetación densa. ¿Qué encuentras? Cascadas menores y paz absoluta. ¡Cuidado! Respeta la fauna local y no contamines las fuentes.", audio: "aud/aud_h7.mp3", image: "img/img_h7.jpg" },
        { id: "img_h8", title: "2. Río Cali / Bellavista (Cuenca)", text: "Es una corriente secundaria de gran valor ecológico que desciende por laderas húmedas con más de 120 hectáreas de bosque ribereño endémico, regulando microclimas locales y sirviendo de corredor biológico para anfibios.", audio: "aud/aud_h8.mp3", image: "img/img_h8.jpg" },
        { id: "img_h9", title: "3. Río Pichindé", text: "El Río Pichindé es Fuente de vida en la alta montaña. ¿Qué encuentras? senderos de trekking y aire puro. ¡Cuidado! No enciendas fogatas.", audio: "aud/aud_h9.mp3", image: "img/img_h9.jpg" },
        { id: "img_h10", title: "3. Río Pichindé (Cuenca)", text: "Cuenta con una cuenca hidrográfica de más de 2.500 hectáreas de selva subandina. Sus aguas bajan con gran fuerza modelando cañones profundos que alimentan el río Cali.", audio: "aud/aud_h10.mp3", image: "img/img_h10.jpg" },
        { id: "img_h11", title: "1. Jardín Botánico de Cali", text: "El Jardín Botánico de Cali es el museo vivo de la ciudad. ¿Qué encuentras? colección de plantas tropicales y bosque seco. ¡Cuidado! Sigue los senderos marcados.", audio: "aud/aud_h11.mp3", image: "img/img_h11.jpg" },
        { id: "img_h12", title: "1. Jardín Botánico (Ubicación)", text: "Está ubicado en el bosque municipal, abarca más de 7 hectáreas de colecciones vivas con más de 500 especies de plantas tropicales, árboles centenarios y especies nativas en peligro de extinción.", audio: "aud/aud_h12.mp3", image: "img/img_h12.jpg" },
        { id: "img_h13", title: "2. Campo de Girasoles", text: "El Campo de girasoles es un espectáculo visual impresionante en la zona rural. ¿Qué encuentras? cultivo masivo y fotografía de naturaleza. ¡Cuidado! No pises los cultivos.", audio: "aud/aud_h13.mp3", image: "img/img_h13.jpg" },
        { id: "img_h14", title: "2. Campo de Girasoles (Ecosistema)", text: "Es un ecosistema agrícola de más de 2 hectáreas que transforma suelos degradados en parches de alta polinización para abejas, mariposas y aves migratorias, demostrando agricultura sostenible.", audio: "aud/aud_h14.mp3", image: "img/img_h14.jpg" },
        { id: "img_h15", title: "3. Corazón de Pance", text: "El Corazón de Pance es un santuario verde. ¿Qué encuentras? educación ambiental y árboles centenarios. ¡Cuidado! Reduce el uso de plásticos de un solo uso.", audio: "aud/aud_h15.mp3", image: "img/img_h15.jpg" },
        { id: "img_h16", title: "3. Corazón de Pance (Predio)", text: "Es un predio de conservación privada y comunitaria de más de 15 hectáreas enfocado en la restauración de guaduales y árboles nativos de sombrío para aves.", audio: "aud/aud_h16.mp3", image: "img/img_h16.jpg" },
        { id: "img_h17", title: "1. Zoológico de Cali", text: "El Zoológico de Cali es uno de los mejores de América Latina. ¿Qué encuentras? conservación de fauna sudamericana y andina. ¡Cuidado! No alimentes a los animales con comida humana.", audio: "aud/aud_h17.mp3", image: "img/img_h17.jpg" },
        { id: "img_h18", title: "1. Zoológico de Cali (Ecosistema)", text: "Es Considerado uno de los mejores de Latinoamérica, alberga más de 2.500 animales de 200 especies en ambientes simulados que replican los bosques secos y húmedos del occidente colombiano.", audio: "aud/aud_h18.mp3", image: "img/img_h18.jpg" },
        { id: "img_h19", title: "2. Parque de las Garzas", text: "El Parque de las Garzas es un refugio de aves acuáticas al sur de la ciudad. ¿Qué encuentras? avistamiento masivo de garzas al atardecer. ¡Cuidado! Mantén una distancia prudente para no alterarlas.", audio: "aud/aud_h19.mp3", image: "img/img_h19.jpg" },
        { id: "img_h20", title: "2. Parque de las Garzas (Humedal)", text: "Es Humedal urbano con un área protegida de 3.5 hectáreas que sirve como dormitorio y zona de cría para miles de garzas blancas, bueyeras y aves migratorias del sur del continente.", audio: "aud/aud_h20.mp3", image: "img/img_h20.jpg" },
        { id: "img_h21", title: "3. Granja Interactiva Ambiental", text: "La Granja interactiva local son espacios de conexión rural.¿Qué encuentras? Animales de granja y pedagogía agroecológica. ¡Cuidado! Trata con respeto y empatía a los animales.", audio: "aud/aud_h21.mp3", image: "img/img_h21.jpg" },
        { id: "img_h22", title: "3. Granja Interactiva (Espacio)", text: "Es un espacio de interacción pedagógica donde se rescata la fauna doméstica y silvestre rehabilitada, fomentando la convivencia armónica entre humanos y animales de granja bajo principios de bienestar animal.", audio: "aud/aud_h22.mp3", image: "img/img_h22.jpg" },
        { id: "img_h23", title: "Cierre del Relato", text: "¡Excelente! Ahora ya conoces cómo estos lugares aportan al equilibrio ecológico de Cali. ¿Estás listo para visitar la ciudad y ser parte activa de su conservación? ¡Tu aventura comienza ahora!", audio: "aud/aud_h23.mp3", image: "img/img_h23.jpg" }
    ],
    modoInteraccion: {
        intro: [
            { id: "img_t1", text: "\"Cali es un verdadero paraíso de biodiversidad. El agua cristalina de nuestros siete ríos, el verdor infinito de los bosques de montaña y el canto de cientos de especies de aves conviven en armonía, haciendo de la Sucursal del Cielo un lugar único donde la vida florece a cada paso.\"", audio: "aud/aud_t1.mp3", image: "img/img_t1.jpg" },
            { id: "img_t2", text: "\"Sin embargo, este equilibrio se está rompiendo. El plástico y los residuos ahogan nuestras fuentes hídricas, la tala inclemente despoja de vegetación a nuestras montañas y la fauna silvestre pierde sus hogares entre el concreto. Si no actuamos pronto, la cuna natural de Cali podría apagarse.\"", audio: "aud/aud_t2.mp3", image: "img/img_t2.jpg" },
            { id: "img_t3", text: "\"El futuro de la ciudad está a punto de decidirse entre el colapso ambiental o un renacer lleno de vida. Hoy tú tienes el poder de cambiar el rumbo de esta historia. ¡Tú serás el héroe de esta historia!\"", audio: "aud/aud_t3.mp3", image: "img/img_t3.jpg" }
        ],
        seleccionHistoria: {
            id: "img_x2",
            encabezado: "\"Cali es un territorio de biodiversidad milagrosa, pero hoy nuestros ecosistemas enfrentan una encrucijada crítica. Depende de ti mantenerlos con vida o dejar que colapsen. ¿Estás listo para asumir el desafío y convertirte en el guardián de nuestra naturaleza?\"",
            instruccion: "\"Elige la historia que desees realizar y salva un ecosistema:\"",
            audio: "aud/aud_z2.mp3",
            image: "img/img_x2.jpg"
        },
        historias: {
            rios: {
                titulo: "Historia 1: El Llanto del Agua (Ríos de Cali)",
                escenas: [
                    { id: "img_r1", text: "\"¡Hola! Soy Pancito, el espíritu de los ríos que nacen en los majestuosos Farallones de Cali. Me encargo de mantener fresca la ciudad y dar de beber a miles de seres vivos. Hoy seré tu guía en esta aventura hídrica.\"", audio: "aud/aud_r1.mp3" },
                    { id: "img_r2", text: "\"Cali es privileged. Aquí disfrutamos del gigante Río Pance, las aguas cristalinas del Río Pichindé y los rincones tranquilos del Río Bellavista. Lugares mágicos para refrescarse y conectar con la naturaleza.\"", audio: "aud/aud_r2.mp3" },
                    { id: "img_r3", text: "\"Nuestros ríos nacen a más de 3.000 metros de altura. En sus riberas puedes hacer caminatas ecológicas, contemplar cascadas y sentir la fuerza del agua pura que oxigena todo nuestro valle.\"", audio: "aud/aud_r3.mp3" },
                    { id: "img_r4", text: "\"¡Pero algo anda muy mal! Toneladas de plástico se acumulan en mis orillas, la tala desmedida seca los nacimientos y la contaminación nos está ahogando.\"", audio: "aud/aud_r4.mp3" }
                ],
                encrucijada: { id: "img_x3", texto: "\"Estamos a punto de perder nuestras fuentes de agua para siempre. Necesitamos a un verdadero héroe que tome las decisiones correctas. ¿Aceptas la misión de salvar los ríos de Cali?\"", audio: "aud/aud_z3.mp3", opcionA: "A ) ¡Sí, quiero salvar los ríos!", opcionB: "B ) No me importa, continuar la rutina" },
                feliz: [
                    { id: "img_r5", text: "\"¡Sabía que podía contar contigo! Veo a personas concientizadas recogiendo residuos y cuidando las cuencas altas. ¡Aún podemos lograrlo!\"", audio: "aud/aud_r5.mp3" },
                    { id: "img_r6", text: "\"¡Mira cómo cambia todo! Al ahorrar agua en casa y proteger los árboles ribereños, el cauce vuelve a tomar fuerza.\"", audio: "aud/aud_r6.mp3" },
                    { id: "img_r7", text: "\"¡Lo logramos! Los ríos de Cali vuelven a correr libres y cristalinos. ¡Gracias a ti la Sucursal Natural sigue viva! Has ganado el título de Guardián del Agua.\"", audio: "aud/aud_r7.mp3" }
                ],
                triste: [
                    { id: "img_r8", text: "\"Oh no... nadie escucha nuestro llamado. Las botellas siguen cayendo al agua y el calor seca mis fuentes día a día.\"", audio: "aud/aud_r8.mp3" },
                    { id: "img_r9", text: "\"Nadie nos ayuda... El agua potable se agota, los peces mueren y la ciudad empieza a sufrir de una sed extrema.\"", audio: "aud/aud_r9.mp3" },
                    { id: "img_r10", text: "\"Es el fin... Los ríos de Cali han muerto. Sin agua, toda la vida en la ciudad se ha apagado...\"", audio: "aud/aud_r10.mp3" }
                ],
                trivia: [
                    { pregunta: "¿Cómo ayudarías principalmente a que los ríos de Cali no se sequen en verano?", opciones: ["A) Dejar las llaves abiertas", "B) Ahorrar agua en casa y proteger las cuencas altas", "C) Echar agua embotellada al río."], correcta: 1 },
                    { pregunta: "¿Por qué razón principal se ensucian y contaminan los ríos urbanos como el Pance o el Lili?", opciones: ["A) Por la lluvia natural", "B) Por la acumulación masiva de basura y plásticos arrojados irresponsablemente", "C) Por las piedras del fondo."], correcta: 1 },
                    { pregunta: "¿Qué rol cumplen los árboles nativos (como el guadua) alrededor de los ríos?", opciones: ["A) Atraen mosquitos", "B) Regulan el ciclo del agua, retienen la tierra y protegian los cauces", "C) No sirven para nada."], correcta: 1 }
                ]
            },
            flora: {
                titulo: "Historia 2: El Silencio del Bosque (Flora de Cali)",
                escenas: [
                    { id: "img_f1", text: "\"¡Hola! Soy Catleya, el espíritu de la flora caleña. Me encargo de florecer en los parques, purificar el aire y vestir de colores nuestros cerros. Hoy seré tu guía botánica.\"", audio: "aud/aud_f1.mp3" },
                    { id: "img_f2", text: "\"Nuestra ciudad late a través del museo vivo del Jardín Botánico de Cali, los dorados Campos de Girasoles en la zona rural y el exuberante santuario del Corazón de Pance.\"", audio: "aud/aud_f2.mp3" },
                    { id: "img_f3", text: "\"Aquí habitan más de 500 especies de plantas tropicales y guaduas ancestrales que capturan el carbono y regulan la temperatura de nuestra hermosa ciudad.\"", audio: "aud/aud_f3.mp3" },
                    { id: "img_f4", text: "\"¡Pero la sombra de la destrucción nos acecha! La tala ilegal para madera y los incendios provocados en los cerros están arrasando con nuestros bosques nativos.\"", audio: "aud/aud_f4.mp3" }
                ],
                encrucijada: { id: "img_x4", texto: "\"Sin vegetación, Cali se convertirá en un desierto gris y sin aire puro. ¿Nos ayudarás a reforestar y proteger la flora de nuestra tierra?\"", audio: "aud/aud_z4.mp3", opcionA: "A ) ¡Sí, quiero proteger el bosque!", opcionB: "B ) No me interesa" },
                feliz: [
                    { id: "img_f5", text: "\"¡Tu apoyo me llena de vida! La comunidad se ha unido para plantar guayacanes y orquídeas nativas en las zonas afectadas.\"", audio: "aud/aud_f5.mp3" },
                    { id: "img_f6", text: "\"¡El aire vuelve a ser fresco! Al respetar los senderos y evitar las quemas, el pulmón verde de Cali respira de nuevo.\"", audio: "aud/aud_f6.mp3" },
                    { id: "img_f7", text: "\"¡Lo logramos! Las flores y los bosques de Cali vuelven a brillar con todo su esplendor. ¡Eres el Guardián de la Flora!\"", audio: "aud/aud_f7.mp3" }
                ],
                triste: [
                    { id: "img_f8", text: "\"Las llamas siguen avanzando sin control y nadie hace nada para detener la tala en los cerros...\"", audio: "aud/aud_f8.mp3" },
                    { id: "img_f9", text: "\"Las orquídeas han desaparecido... Sin árboles de sombrío, el calor de la ciudad se vuelve insoportable.\"", audio: "aud/aud_f9.mp3" },
                    { id: "img_f10", text: "\"El último árbol ha caído. Cali ha perdido su oxígeno y su color...\"", audio: "aud/aud_f10.mp3" }
                ],
                trivia: [
                    { pregunta: "¿Qué acción ayuda directamente a proteger los bosques urbanos de Cali?", opciones: ["A) Plantar árboles nativos y no talar", "B) Cortar arbustos para hacer espacio", "C) Quemar hojas secas."], correcta: 0 },
                    { pregunta: "¿Por qué son importantes las orquídeas y plantas nativas en el ecosistema?", opciones: ["A) Atraen plagas", "B) Albergan polinizadores esenciales y regulan la humedad", "C) No tienen función."], correcta: 1 },
                    { pregunta: "Si visitas el Jardín Botánico, ¿qué regla debes seguir strictly?", opciones: ["A) Arrancar flores de recuerdo", "B) Seguir los senderos y no dañar la vegetación", "C) Dejar basura."], correcta: 1 }
                ]
            },
            fauna: {
                titulo: "Historia 3: El Vuelo Apagado (Fauna de Cali)",
                escenas: [
                    { id: "img_a1", text: "\"¡Hola! Soy Mango, la tángara multicolor. Represento la vibrante fauna silvestre que llena de cantos y vida los cielos y bosques de la ciudad. ¡Acompáñame a volar!\"", audio: "aud/aud_a1.mp3" },
                    { id: "img_a2", text: "\"Cali es refugio de fauna. Desde los esfuerzos de conservación del Zoológico de Cali, hasta el descanso milagroso de las garzas en el humedal del sur y las granjas pedagógicas.\"", audio: "aud/aud_a2.mp3" },
                    { id: "img_a3", text: "\"Más de 500 especies de aves cruzan nuestros cielos cada día. Somos una de las ciudades con mayor diversidad avifaunística de todo el planeta.\"", audio: "aud/aud_a3.mp3" },
                    { id: "img_a4", text: "\"¡Pero nuestras alas se apagan! El tráfico ilegal de animales silvestres, las jaulas y la destrucción de nuestros nidos nos están dejando sin hogar.\"", audio: "aud/aud_a4.mp3" }
                ],
                encrucijada: { id: "img_x5", texto: "\"Si los animales silvestres desaparecen, el ecosistema colapsará. ¿Nos ayudarás a defender la fauna de Cali?\"", audio: "aud/aud_z5.mp3", opcionA: "A ) ¡Sí, quiero proteger la fauna!", opcionB: "B ) No me importa" },
                feliz: [
                    { id: "img_a5", text: "\"¡Gracias por alzar tu voz! La gente ha entendido que las aves y animales silvestres deben vivir libres y no en cautiverio.\"", audio: "aud/aud_a5.mp3" },
                    { id: "img_a6", text: "\"¡Nuestros nidos vuelven a estar seguros! Al respetar su espacio y denunciar el tráfico ilegal, la naturaleza recupera su equilibrio.\"", audio: "aud/aud_a6.mp3" },
                    { id: "img_a7", text: "\"¡Cali recuperó su canto! Los cielos de la Sucursal Natural están más vivos que nunca. ¡Eres el Guardián de la Fauna!\"", audio: "aud/aud_a7.mp3" }
                ],
                triste: [
                    { id: "img_a8", text: "\"El comercio ilegal se lleva a mis hermanos y las trampas en la ciudad siguen cobrando vidas...\"", audio: "aud/aud_a8.mp3" },
                    { id: "img_a9", text: "\"Ya nadie canta al amanecer... Las jaulas se llenaron y los cielos se quedaron en absoluto silencio.\"", audio: "aud/aud_a9.mp3" },
                    { id: "img_a10", text: "\"La fauna silvestre ha desaparecido de Cali. Un cielo sin alas es un cielo sin vida...\"", audio: "aud/aud_a10.mp3" }
                ],
                trivia: [
                    { pregunta: "¿Qué debes hacer si ves un ave silvestre herida en la ciudad?", opciones: ["A) Encerrarla en una jaula pequeña", "B) Reportarla al Dagma o autoridades ambientales", "C) Ignorarla."], correcta: 1 },
                    { pregunta: "¿Por qué es ilegal y dañino comprar animales silvestres como mascotas?", opciones: ["A) Porque cantan mucho", "B) Porque se rompe su rol ecológico y sufren maltrato en cautiverio", "C) Porque cuestan mucho."], correcta: 1 },
                    { pregunta: "¿Qué lugar en Cali es emblemático para la conservación y educación sobre fauna?", opciones: ["A) El Zoológico de Cali", "B) Un centro comercial", "C) Una calle pavimentada."], correcta: 0 }
                ]
            }
        }
    }
};

// ==========================================
// 2. LÓGICA DE NAVEGACIÓN Y CANVAS (SKETCH)
// ==========================================
let currentMode = 'bienvenida';
let introIndex = 0;
let relatoIndex = 0;
let interIntroIndex = 0;
let historiaActual = null;
let historiaIndex = 0;
let triviaIdx = 0;
let puntaje = 0;

let audioAmbiente = new Audio('aud/aud_x.mp3');
audioAmbiente.loop = true;
let audioNarracion = null;
let ambienteActivo = false;

window.onload = function() {
    setupCanvas();
    mostrarPantallaBienvenida();
};

function setupCanvas() {
    const canvas = document.getElementById('book-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    ctx.fillStyle = "#f4f0ea";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function triggerCanvasAnimation() {
    const canvas = document.getElementById('book-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let alpha = 1.0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = `rgba(46, 125, 50, ${alpha})`;
        ctx.fillRect(0, 0, canvas.width * (1 - alpha), canvas.height);
        alpha -= 0.15;
        if (alpha > 0) requestAnimationFrame(animate);
    }
    animate();
}

function toggleAudioAmbiente() {
    ambienteActivo = !ambienteActivo;
    if (ambienteActivo) {
        audioAmbiente.play().catch(e => console.log("Audio bloqueado"));
        document.getElementById('btn-audio-env').innerText = "🔊 Audio Ambiente: ON";
    } else {
        audioAmbiente.pause();
        document.getElementById('btn-audio-env').innerText = "🔇 Audio Ambiente: OFF";
    }
}

function reproducirAudio(url) {
    if (audioNarracion) audioNarracion.pause();
    audioNarracion = new Audio(url);
    audioNarracion.play().catch(e => console.log("Audio no encontrado:", url));
}

// --- PANTALLA BIENVENIDA ---
function mostrarPantallaBienvenida() {
    currentMode = 'bienvenida';
    introIndex = 0;
    cargarEscenaBienvenida();
}

function cargarEscenaBienvenida() {
    triggerCanvasAnimation();
    const item = gameData.bienvenida[introIndex];
    document.getElementById('visual-frame').innerHTML = `<img src="${item.image}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
    document.getElementById('story-content').innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.descripcion}</p>
        <div style="background:#e8f5e9; padding:10px; border-radius:6px; margin-top:10px; font-style:italic;">
            ${item.text}
        </div>
    `;
    reproducirAudio(item.audio);

    document.getElementById('action-area').innerHTML = `
        <div class="btn-group">
            ${introIndex > 0 ? '<button onclick="introIndex--; cargarEscenaBienvenida()">⬅️ Anterior</button>' : ''}
            ${introIndex < gameData.bienvenida.length - 1 ? '<button onclick="introIndex++; cargarEscenaBienvenida()">Siguiente ➡️</button>' : '<button onclick="mostrarPantallaInicio()" style="background:#2e7d32;">✨ Continuar al Inicio</button>'}
        </div>
    `;
    document.getElementById('page-indicator').innerText = `Bienvenida ${introIndex + 1} / 3`;
    document.getElementById('chapter-title').innerText = "Introducción Cinematográfica";
}

// --- PANTALLA INICIO ---
function mostrarPantallaInicio() {
    currentMode = 'inicio';
    triggerCanvasAnimation();
    const inicio = gameData.pantallaInicio;

    document.getElementById('visual-frame').innerHTML = `
        <img src="img/logo.png" alt="Logo UAO" style="max-height:100px; object-fit:contain; margin-bottom:10px;" onerror="this.style.display='none'">
        <div style="font-weight:bold; color:#2e7d32; font-size:1.1rem;">Cali: La Sucursal Natural</div>
    `;
    document.getElementById('story-content').innerHTML = `
        <h1>${inicio.textoPantalla}</h1>
        <p><em>"${inicio.eslogan}"</em></p>
        <p>${inicio.descripcion}</p>
    `;
    reproducirAudio(inicio.audio);

    document.getElementById('action-area').innerHTML = `
        <div class="btn-group" style="flex-direction: column;">
            <button onclick="iniciarModoRelato(0)">📖 Modo Relato</button>
            <button onclick="iniciarModoInteraccionIntro(0)">🎮 Modo Interactivo</button>
            <a href="assets/Cali_La_Sucursal_Natural_Guia_del_Viajero.pdf" download style="text-decoration: none;">
                <button style="width: 100%; background: #b26a00;">📥 Descargar Guía Turística (PDF)</button>
            </a>
        </div>
    `;
    document.getElementById('page-indicator').innerText = "Pantalla de Inicio";
    document.getElementById('chapter-title').innerText = "Menú Principal";
}

// --- MODO RELATO ---
function iniciarModoRelato(idx) {
    currentMode = 'relato';
    relatoIndex = idx;
    triggerCanvasAnimation();
    const item = gameData.modoRelato[relatoIndex];

    document.getElementById('visual-frame').innerHTML = `<img src="${item.image}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
    document.getElementById('story-content').innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.text}</p>
    `;
    reproducirAudio(item.audio);

    document.getElementById('action-area').innerHTML = `
        <div class="btn-group">
            ${relatoIndex > 0 ? '<button onclick="iniciarModoRelato(relatoIndex - 1)">⬅️ Anterior</button>' : '<button onclick="mostrarPantallaInicio()">🏠 Menú</button>'}
            ${relatoIndex < gameData.modoRelato.length - 1 ? '<button onclick="iniciarModoRelato(relatoIndex + 1)">Siguiente ➡️</button>' : '<button onclick="mostrarPantallaInicio()" style="background:#b26a00;">✨ Finalizar Relato</button>'}
        </div>
    `;
    document.getElementById('page-indicator').innerText = `Relato ${relatoIndex + 1} / 23`;
    document.getElementById('chapter-title').innerText = "Modo Relato Lineal";
}

// --- MODO INTERACCIÓN ---
function iniciarModoInteraccionIntro(idx) {
    currentMode = 'interaccion-intro';
    interIntroIndex = idx;
    triggerCanvasAnimation();
    const item = gameData.modoInteraccion.intro[interIntroIndex];

    document.getElementById('visual-frame').innerHTML = `<img src="${item.image}" alt="Escena Interacción" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
    document.getElementById('story-content').innerHTML = `
        <h2>Introducción Interactiva</h2>
        <p>${item.text}</p>
    `;
    reproducirAudio(item.audio);

    document.getElementById('action-area').innerHTML = `
        <div class="btn-group">
            ${interIntroIndex > 0 ? '<button onclick="iniciarModoInteraccionIntro(interIntroIndex - 1)">⬅️ Anterior</button>' : '<button onclick="mostrarPantallaInicio()">🏠 Menú</button>'}
            ${interIntroIndex < gameData.modoInteraccion.intro.length - 1 ? '<button onclick="iniciarModoInteraccionIntro(interIntroIndex + 1)">Siguiente ➡️</button>' : '<button onclick="mostrarMenuSeleccionHistorias()" style="background:#2e7d32;">✨ Elegir Misión</button>'}
        </div>
    `;
    document.getElementById('page-indicator').innerText = `Intro Interactivo ${interIntroIndex + 1} / 3`;
    document.getElementById('chapter-title').innerText = "Modo Interacción";
}

function mostrarMenuSeleccionHistorias() {
    currentMode = 'menu-historias';
    triggerCanvasAnimation();
    const sel = gameData.modoInteraccion.seleccionHistoria;

    document.getElementById('visual-frame').innerHTML = `<img src="${sel.image}" alt="Selección" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
    document.getElementById('story-content').innerHTML = `
        <h2>Selección de Historia</h2>
        <p>${sel.encabezado}</p>
        <p><strong>${sel.instruccion}</strong></p>
    `;
    reproducirAudio(sel.audio);

    document.getElementById('action-area').innerHTML = `
        <div class="btn-group" style="flex-direction: column;">
            <button onclick="cargarHistoriaInteractiva('rios')">🌊 Historia 1: El Llanto del Agua (Ríos)</button>
            <button onclick="cargarHistoriaInteractiva('flora')">🌸 Historia 2: El Silencio del Bosque (Flora)</button>
            <button onclick="cargarHistoriaInteractiva('fauna')">🦜 Historia 3: El Vuelo Apagado (Fauna)</button>
            <button onclick="mostrarPantallaInicio()" style="background:#555; margin-top:5px;">⬅️ Volver al Menú</button>
        </div>
    `;
    document.getElementById('page-indicator').innerText = "Menú de Misiones";
    document.getElementById('chapter-title').innerText = "Selección de Ecosistema";
}

function cargarHistoriaInteractiva(tipo) {
    historiaActual = tipo;
    historiaIndex = 0;
    mostrarPasoHistoriaInteractiva();
}

function mostrarPasoHistoriaInteractiva() {
    triggerCanvasAnimation();
    const histData = gameData.modoInteraccion.historias[historiaActual];

    if (historiaIndex < histData.escenas.length) {
        let esc = histData.escenas[historiaIndex];
        document.getElementById('visual-frame').innerHTML = `<img src="img/${esc.id}.jpg" alt="Escena" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
        document.getElementById('story-content').innerHTML = `
            <h2>${histData.titulo}</h2>
            <p>${esc.text}</p>
        `;
        reproducirAudio(esc.audio);

        document.getElementById('action-area').innerHTML = `
            <div class="btn-group">
                <button onclick="historiaIndex++; mostrarPasoHistoriaInteractiva()">Siguiente ➡️</button>
            </div>
        `;
        document.getElementById('page-indicator').innerText = `Escena ${historiaIndex + 1} / 4`;
    } else {
        mostrarPantallaEncrucijadaHistoria();
    }
}

function mostrarPantallaEncrucijadaHistoria() {
    triggerCanvasAnimation();
    const histData = gameData.modoInteraccion.historias[historiaActual];
    const enc = histData.encrucijada;

    document.getElementById('visual-frame').innerHTML = `<img src="img/${enc.id}.jpg" alt="Encrucijada" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
    document.getElementById('story-content').innerHTML = `
        <h2>Pantalla de Selección Decisión Historia</h2>
        <p>${enc.texto}</p>
    `;
    reproducirAudio(enc.audio);

    document.getElementById('action-area').innerHTML = `
        <div class="btn-group" style="flex-direction: column;">
            <button onclick="iniciarTriviaInteractiva()" style="background:#2e7d32;">🟢 ${enc.opcionA}</button>
            <button onclick="mostrarFinalTriste(0)" style="background:#c62828;">🔴 ${enc.opcionB}</button>
        </div>
    `;
    document.getElementById('page-indicator').innerText = "Encrucijada";
}

function iniciarTriviaInteractiva() {
    triviaIdx = 0;
    puntaje = 0;
    cargarSiguientePreguntaTrivia();
}

function cargarSiguientePreguntaTrivia() {
    triggerCanvasAnimation();
    const triviaList = gameData.modoInteraccion.historias[historiaActual].trivia;

    if (triviaIdx < triviaList.length) {
        let q = triviaList[triviaIdx];
        document.getElementById('visual-frame').innerHTML = `<div style="padding:20px; font-weight:bold; color:#2e7d32;">Pregunta ${triviaIdx + 1} de 3</div>`;
        document.getElementById('story-content').innerHTML = `
            <h2>Desafío de Guardián</h2>
            <p><strong>${q.pregunta}</strong></p>
            <div style="margin-top:15px; display:flex; flex-direction:column; gap:8px;">
                <button onclick="responderTrivia(0)" style="background:#455a64; text-align:left;">${q.opciones[0]}</button>
                <button onclick="responderTrivia(1)" style="background:#455a64; text-align:left;">${q.opciones[1]}</button>
                <button onclick="responderTrivia(2)" style="background:#455a64; text-align:left;">${q.opciones[2]}</button>
            </div>
        `;
        document.getElementById('action-area').innerHTML = ``;
        document.getElementById('page-indicator').innerText = `Trivia ${triviaIdx + 1} / 3`;
    } else {
        if (puntaje >= 2) {
            mostrarFinalFeliz(0);
        } else {
            mostrarFinalTriste(0);
        }
    }
}

function responderTrivia(opcion) {
    const triviaList = gameData.modoInteraccion.historias[historiaActual].trivia;
    if (opcion === triviaList[triviaIdx].correcta) puntaje++;
    triviaIdx++;
    cargarSiguientePreguntaTrivia();
}

function mostrarFinalFeliz(idx) {
    triggerCanvasAnimation();
    const histData = gameData.modoInteraccion.historias[historiaActual];
    const felizArr = histData.feliz;

    if (idx < felizArr.length) {
        let item = felizArr[idx];
        document.getElementById('visual-frame').innerHTML = `<img src="img/${item.id}.jpg" alt="Final Feliz" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
        document.getElementById('story-content').innerHTML = `
            <h2 style="color:#2e7d32;">Historia Feliz: Decisión Positiva</h2>
            <p>${item.text}</p>
        `;
        reproducirAudio(item.audio);

        document.getElementById('action-area').innerHTML = `
            <div class="btn-group">
                ${idx < felizArr.length - 1 ? `<button onclick="mostrarFinalFeliz(${idx + 1})">Siguiente ➡️</button>` : `<button onclick="mostrarMenuSeleccionHistorias()" style="background:#2e7d32;">🔄 Volver al Menú de Selección</button>`}
            </div>
        `;
        document.getElementById('page-indicator').innerText = `Final Feliz ${idx + 1} / 3`;
    }
}

function mostrarFinalTriste(idx) {
    triggerCanvasAnimation();
    const histData = gameData.modoInteraccion.historias[historiaActual];
    const tristeArr = histData.triste;

    if (idx < tristeArr.length) {
        let item = tristeArr[idx];
        document.getElementById('visual-frame').innerHTML = `<img src="img/${item.id}.jpg" alt="Final Triste" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
        document.getElementById('story-content').innerHTML = `
            <h2 style="color:#c62828;">Historia Triste / Decisión Negativa</h2>
            <p>${item.text}</p>
        `;
        reproducirAudio(item.audio);

        document.getElementById('action-area').innerHTML = `
            <div class="btn-group">
                ${idx < tristeArr.length - 1 ? `<button onclick="mostrarFinalTriste(${idx + 1})">Siguiente ➡️</button>` : `<button onclick="mostrarMenuSeleccionHistorias()" style="background:#c62828;">🔄 Volver al Menú de Selección</button>`}
            </div>
        `;
        document.getElementById('page-indicator').innerText = `Final Trágico ${idx + 1} / 3`;
    }
}