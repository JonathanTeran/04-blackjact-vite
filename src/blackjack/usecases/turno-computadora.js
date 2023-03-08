import { pedirCarta,valorCarta,crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minismos que la computadora necesita para ganar
 * @param {HTMLelement} donde se va a mostrar los puntos 
 * @param {HTMLelement} divCartasComputadora donde se va a mostrar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos,puntosHTML,divCartasComputadora, deck=[]) => {
    
    if (!puntosMinimos) throw new Error('Puntos minimos son necesario');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');
    if (!divCartasComputadora) throw new Error('Argumento divCartasComputadora es necesario');
    let puntosComputadora = 0;
   

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        // imgCarta.classList.add('carta');

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}