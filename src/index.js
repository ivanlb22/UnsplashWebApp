//Importamos el css
import './css/style.css';

//Importamos las funciones que necesita para que funcione la aplicación
import { crearVectorImagenes } from  './js/imagenes-page'
import { diaNocheModo } from  './js/daynight-control'


//Elementos DOM
const lupa = document.getElementById( 'lupa' );




//LLamadas a las funciones 

//Función que controla el color de fondo y de la letra en función de si es de día o de noche



//Eventos

window.addEventListener( 'load', diaNocheModo );

//Evento que al pulsar enter en el input inicia la petición a la api

input.addEventListener( 'keyup' , ( evento ) => {
    if( evento.key === 'Enter') {
        crearVectorImagenes();
    }
})
lupa.addEventListener( 'click', () => {
    crearVectorImagenes();
})

