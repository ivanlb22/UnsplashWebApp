export const diaNocheModo = () => {
    //Primero, llamamos al objeto date
    const fecha = new Date();
    //Segundo, extraemos la hora de la fecha
    const hora = fecha.getHours();
    //Tercero, hacemos las condiciones, el método getHours, devuelve la hora en formato 0 a 23
    if( hora > 8 && hora < 20){
        //Accedemos al body desde el documento y cambiamos background-color y el color
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = '#121212'
    } else {
        document.body.style.backgroundColor = '#121212'
        document.body.style.color = '#fff';
    }
}