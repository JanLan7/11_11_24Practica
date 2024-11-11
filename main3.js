// Ejercicio 3: Búsqueda de palabra clave en comentarios
// Crea una función que pida al usuario escribir un comentario sobre su experiencia de compra. La función debe comprobar si el comentario contiene la palabra "excelente" y mostrar un alert() que diga "Gracias por tu excelente comentario" si la encuentra. Si no la contiene, muestra un alert() que diga "Gracias por tu comentario".

// Pista: Usa el método .includes() para verificar si la palabra clave está presente en la cadena.

//funcion principal
function reseña (){
    let experienciaDeCompra = prompt("Quisiera dejarnos algun comentario?: ")
    let comprobacion = experienciaDeCompra.includes("excelente")
    if(comprobacion){
        alert("Gracias por tu excelente comentario 😎")
    }else{
        alert("Gracias por tu comentario ")
    }
alert("Hasta luego!")   
}
reseña();

//Codigo concluido 😎