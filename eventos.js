function saludar() {
    alert("Hola!");
}

document.addEventListener("DOMContentLoaded", function () {
    const Divsaluda = document.getElementById("Divsaluda");
    const saludar = document.getElementById("botonsal"); 
    Divsaluda.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    saludar.addEventListener("click", function (event) {
        event.stopPropagation(); 
        saludar();
    });
});





