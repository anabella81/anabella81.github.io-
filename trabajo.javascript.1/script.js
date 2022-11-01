

function resumen(){

    var cantidadEntradas = document.getElementById('cantidadEntradas').value;
    var botonCalcular = document.getElementById('botonCalcular');
    var categoria = document.getElementById('inputState');
    var totalCompra = document.getElementById('totalCompra');

    var pagoFinal
    console.log(typeof cantidad)
    console.log(categoria.value)
    console.log(cantidadEntradas.value)
    

    if(categoria.value=="estudiante") {
       pagoFinal = (cantidadEntradas*200)*0.2
           
    }
    
    if (categoria.value == "trainee") {
        pagoFinal = (cantidadEntradas * 200) * 0.5 
        
    }

    if (categoria.value == "junior") {
        pagoFinal = (cantidadEntradas * 200) * 8.5 
        
    }

  
  totalCompra.innerHTML = pagoFinal;
   

    
}

resumen() ;
// pagoFinal = totalCompra













