function activarPlanB(elementoImagen) {
    elementoImagen.src = "https://drive.google.com/uc?export=view&id=1aWB60R__W7gm1vvx-slDOrpTZltOMZL1";
    elementoImagen.onerror = function() {
        this.src = "https://images.weserv.nl/?url=drive.google.com/uc?id=1aWB60R__W7gm1vvx-slDOrpTZltOMZL1";
        this.onerror = null;
    };
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, sonando = false;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('contenedor-reproductor', {
        height: '0', width: '0', videoId: 'VkeLkuFzPfM', 
        playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'VkeLkuFzPfM' }
    });
}

function alternarMarcha() {
    const textoBoton = document.getElementById('texto-marcha');
    if (!player) return;
    if (!sonando) { 
        player.playVideo(); 
        textoBoton.innerHTML = "Pausar Marcha de las Legiones"; 
        sonando = true; 
    } else { 
        player.pauseVideo(); 
        textoBoton.innerHTML = "Música: Marcha de las Legiones"; 
        sonando = false; 
    }
}

var yaSeHaEscuchado = false;
function reproducirSaludo() {
    const saludo = document.getElementById('audio-bienvenida');
    const botonSaludo = document.getElementById('boton-saludo');
    const textoSaludo = document.getElementById('texto-saludo');
    
    if (!yaSeHaEscuchado && saludo) {
        yaSeHaEscuchado = true;
        botonSaludo.disabled = true;
        textoSaludo.innerText = "Mensaje Reproducido";
        saludo.play().catch(e => {
            console.error(e);
            botonSaludo.disabled = false;
            textoSaludo.innerText = "Escuchar Mensaje Imperial";
            yaSeHaEscuchado = false;
        });
    }
}

const textosImperiales = {
    1: { titulo: "I. El Linaje de Venus y la Resistencia", letra: "L", texto: "La historia de Cayo Julio César comienza no en un palacio, sino en la Subura, el barrio más denso y peligroso de Roma, en el año 100 a.C..." },
    2: { titulo: "II. El Honor en el Egeo: Piratas y Retórica", letra: "E", texto: "En el 75 a.C., piratas cilicios capturaron a César mientras viajaba a Rodas para estudiar oratoria..." },
    3: { titulo: "III. El Pacto de los Titanes: El Triunvirato", letra: "E", texto: "El Primer Triunvirato (60 a.C.) fue la alianza secreta más poderosa de la antigüedad..." },
    4: { titulo: "IV. Bellvm Gallicvm: Alesia y el Genio Militar", letra: "L", texto: "La conquista de las Galias (58-50 a.C.) no fue solo una campaña de expansión..." },
    5: { titulo: "V. El Paso del Rubicón: Alea Iacta Est", letra: "E", texto: "El 10 de enero del 49 a.C., César llegó al límite de su provincia..." },
    6: { titulo: "VI. Farsalia: El Duelo de los Gigantes", letra: "E", texto: "En el año 48 a.C., el destino de Roma se decidió en Tesalia..." },
    7: { titulo: "VII. El Sueño del Nilo y Cleopatra", letra: "E", texto: "En Egipto, César no solo encontró a Cleopatra, sino el modelo de la monarquía absoluta..." },
    8: { titulo: "VIII. El Estado Juliano y la Revolución Económica", letra: "C", texto: "Como Dictador Perpetuo, César rediseñó la realidad..." },
    9: { titulo: "IX. Los Idus de Marzo: El Ocaso del Semidiós", letra: "E", texto: "El 15 de marzo del 44 a.C., la libertad de los aristócratas se vistió de traición..." }
};

function abrirTomo(id) {
    document.getElementById('pagina-inicio').style.display = 'none';
    document.getElementById('pagina-lectura').style.display = 'block';
    const tomo = textosImperiales[id];
    document.getElementById('titulo-capitulo').innerText = tomo.titulo;
    document.getElementById('cuerpo-contenido').innerHTML = `<span class="dropcap">${tomo.letra}</span><p style="margin: 0; text-align: justify;">${tomo.texto}</p>`;
    window.scrollTo(0, 0);
}

function abrirGaleria() {
    document.getElementById('pagina-inicio').style.display = 'none';
    document.getElementById('pagina-lectura').style.display = 'block';
    document.getElementById('titulo-capitulo').innerText = "Monumenta Caesar";
    document.getElementById('cuerpo-contenido').innerHTML = `
        <div class="grid-visual">
            <div class="frame-imagen">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/C%C3%A9sar_%2813667960455%29.jpg/960px-C%C3%A9sar_%2813667960455%29.jpg">
                <p><b>Bvsto de Arlés</b>Retrato de realismo arqueológico impecable.</p>
            </div>
        </div>`;
    window.scrollTo(0, 0);
}

function volverAlInicio() {
    document.getElementById('pagina-lectura').style.display = 'none';
    document.getElementById('pagina-inicio').style.display = 'block';
    window.scrollTo(0, 0);
}