// Ejercicio 1: Concatenación de productos comprados
// Crea una función que pida al usuario ingresar el nombre de tres productos que ha comprado, uno por uno. Luego, crea una función que reciba estos nombres y construya una cadena de texto en formato de lista separada por comas, y muestra el resultado en un alert().

// Ejemplo: Si el usuario ingresa "manzana", "pan" y "leche", la salida debe ser: "Productos comprados: manzana, pan, leche".
//funcion interna
function productoscomprados(a,b,c) {
    let sumadeproductos = a + ", " + b + ", " + c;
    return sumadeproductos 
}
//funcion principal
function pedirUsuario(){
    let producto1 = prompt("Ingrese el producto 1 que ha comprado: ")
    let producto2 = prompt("Ingrese el producto 2 que ha comprado: ")
    let producto3 = prompt("Ingrese el producto 3 que ha comprado: ")
    //Validacion
    if(!isNaN(producto1) || !isNaN(producto2)|| !isNaN(producto3))return;
    //total
    let total = productoscomprados(producto1,producto2,producto3);
    //Confirmacion
    let estasSeguro = confirm(`Estas seguro de que estos productos fueron los que compraste?: ${total}`)
    if(estasSeguro){
        alert("Gracias por su compra")
    }else{
        alert("Cancelado")
    }
}
pedirUsuario();

//Codigo concluido 😎