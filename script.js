var miDiv = document.getElementById("miDiv");
var marcador = document.getElementById("contador");
var contador = 0;

miDiv.addEventListener("click", function(){
    miDiv.style.display = "none";
    contador++;
    marcador.innerHTML = contador;

    console.log(contador);
    setTimeout(function(){
        miDiv.style.display = "block";
        miDiv.style.top = Math.random() * 90 + "%";
        miDiv.style.left = Math.random() * 90 + "%";
        
        setTimeout(function(){
            miDiv.parentNode.removeChild(miDiv);
            var nuevoDiv = document.createElement("div");
            nuevoDiv.innerHTML = "Tienes una puntuacion de  "+contador+" , refresca para jugar mas.";
            document.body.appendChild(nuevoDiv);
        },10000);//10 segundos duracion de la partida
    }, 100); //0.1 segundo duracion de respawn
});





