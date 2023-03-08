
import _ from 'underscore';

export const miNombre = 'Jonathan';

// Esta función crea un nuevo deck

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo ['C','D','H','S'] 
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length ===0) throw new Error('Tipos de cartas es obligatorio como un arrego de string');
    if (!tiposEspeciales || tiposEspeciales.length ===0) throw new Error('tipos de cartas es obligatorio como un arrego de string');
    
    let deck         = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;