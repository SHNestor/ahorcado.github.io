const nuevaPalabra= document.querySelector("#palabraNueva");
const Button = document.getElementById('ingresarP');

const words= ['hola'];

const newWord= () =>
{
    let mensaje= nuevaPalabra.value;   
    if(mensaje.length > 0)
    {
       console.log(mensaje);
       console.log(words.length);
       words.push(mensaje);
       console.log(words.length);
       nuevaPalabra.value= " ";

    }
}

Button.addEventListener('click', newWord);