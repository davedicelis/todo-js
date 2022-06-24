import '../css/componentes.css'
//import webpacklog from '../assets/img/webpack-logo.png';
export const saludar =(nombre = 'sin nombre') =>{

    console.log ('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre} Dicelis!!!`;

    document.body.append(h1);

    //Img
    // console.log(webpacklog);
    // const img = document.createElement('img');
    // img.src = webpacklog;
    // document.body.append(img);
}