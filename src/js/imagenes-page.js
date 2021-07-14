import { cargarImagenesAPI } from  './http-provider'


//Tengo que llamar a la función que dibuja el html

export const crearVectorImagenes = async () => {
    const resultados = await cargarImagenesAPI();
    const imagenesNodo = [];
    resultados.forEach( (resultado, key ) => {
        console.log( resultado.urls.small );
        console.log( key );
        imagenesNodo[ key ] = document.createElement( 'div');
        imagenesNodo[ key ].classList.add( 'img');
        imagenesNodo[ key ].style.backgroundImage = `url( ${ resultado.urls.small } )`;
        imagenesNodo[ key ].addEventListener( 'dblclick', () => {
            window.open( resultado.links.download, '_blank' )
        })
        imagenes.appendChild( imagenesNodo[ key ] );
    });
}