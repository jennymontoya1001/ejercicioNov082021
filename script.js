//1. Ocultar la divisón de muestra de resultados
document.getElementById('mostrarResultados').style.display = "none";

//2. captura de datos por pantalla y relacionar la función en el onclic del botón

function capturaDatos() {
    let nombre = document.getElementById('inputNombreCliente').value;
    let producto = document.getElementById('InputSelectProducto').value;
    let cantidad = document.getElementById('inputCantidad').value;  
    
    if(nombre === "" || producto === "" ||  cantidad === ""){
        alert('Todos los campos son obligatorios');
    }else{
        calcular(producto,cantidad);
    }
    
}

//3 función calcular

function calcular(producto,cantidad){

    document.getElementById('mostrarResultados').style.display = "block";

    let totalCompra = 0;
    let descuento = 0;
    let totalPagar = 0;
    

    if(producto === 'Aseo'){
         totalCompra = cantidad * 5300;
         descuento = totalCompra * 0.1;
    }else if(producto === 'Carne'){
        totalCompra = cantidad * 6200;
        descuento = totalCompra * 0.2
    }else if(producto === 'Frutas'){
        totalCompra = cantidad * 6900;
        descuento = totalCompra * 0.3
    }
    else{
        totalCompra = cantidad * 4700;
        descuento = 0
    }

     totalPagar = totalCompra - descuento;

     document.getElementById('inputDescuento').value = descuento;
     document.getElementById('inputTotalPagar').value =  totalPagar;

}




