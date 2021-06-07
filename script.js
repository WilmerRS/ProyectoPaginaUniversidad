/* window.addEventListener("load", sliderImagenes(0)); */

function sliderImagenes(iterador) {
    // lista de imagenes
    var imagenes = [];
    imagenes[0] = "res/lista-slider/Chico-espacio.svg";
    imagenes[1] = "res/lista-slider/Mujer-Biblioteca.svg";
    imagenes[2] = "res/lista-slider/chico-matematicas.svg";
    imagenes[3] = "res/lista-slider/Mujer-bombillo-idea.svg";
    // Lista para los circulos de conteo de las imagenes.
    // Se debe agregar primero en el html un elemento
    var circulos = [];
    circulos[0] = document.getElementById("c1");
    circulos[1] = document.getElementById("c2");
    circulos[2] = document.getElementById("c3");
    circulos[3] = document.getElementById("c4");

    var tiempo = 3000;
    var i = iterador;

    function cambiarImagen() {
        // Mostrar imagen el el documento
        document.sliderimg.src = imagenes[i];
        if (i < (imagenes.length - 1)) {
            i++;
            // Codigo para alternar el color en los circulos
            switch (i) {
                case 1:
                    cambiarColorCirculo(0);
                    break;
                case 2:
                    cambiarColorCirculo(1);
                    break;
                case 3:
                    cambiarColorCirculo(2);
                    break;
            }
        } else {
            i = 0;
            cambiarColorCirculo(3);
        }
        for ( var k = 0; k < circulos.length; k++) {
            addCirculos(k);
        }
    }
    //Funcion que muestra la imagen seleccionada
    function addCirculos(k){
        circulos[k].addEventListener("click", function () {
            i = k;
            document.sliderimg.src = imagenes[i];
            cambiarColorCirculo(i);
        });
    }
    // Intervalo de tiempo de la ejecucion de las imagenes
    this.setInterval(cambiarImagen, tiempo);

    function cambiarColorCirculo(circulo) {
        for (var j = 0; j < circulos.length; j++) {
            if (j == circulo) {
                circulos[j].style.backgroundColor = "#A31621";
                circulos[j].style.width = "13px";
                circulos[j].style.height = "13px";
            } else {
                circulos[j].style.backgroundColor = "gray";
                circulos[j].style.width = "12px";
                circulos[j].style.height = "12px";
            }
            circulos[j].style.transition = "0.4s";
        }
    }
}

