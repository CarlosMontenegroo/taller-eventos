function saludar() {
    alert("Hola!");
}

document.addEventListener("DOMContentLoaded", function () {
    let Divsaluda = document.getElementById("Divsaluda");
    let saludar = document.getElementById("botonsal"); 
    Divsaluda.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    saludar.addEventListener("click", function (event) {
        event.stopPropagation(); 
    });
});





