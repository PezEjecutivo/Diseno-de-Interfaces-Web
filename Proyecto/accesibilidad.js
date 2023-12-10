function accesibilidad() {
    alert("Accesibilidad activada");
    var tarjetas = document.querySelectorAll(".card-body");
    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.backgroundColor = "rgb(33,37,41)";
        tarjeta.style.color = "white";
    });
}
