// Ejercicio 2: Contador de caracteres
// Haz una función que reciba una cadena de texto ingresada por el usuario (por ejemplo, una reseña o comentario sobre la compra) y devuelva cuántos caracteres tiene la cadena (incluyendo los espacios). Muestra el resultado con un alert().

// Pista: Usa la propiedad .length de las cadenas para contar los caracteres.

function cadenasDeTextos(){
    let reseña = prompt("Le gustaria dejar alguna reseña?: ");
    if(reseña){
        alert(reseña.length);
    }  
}
cadenasDeTextos();

//codigo concluido 🙂