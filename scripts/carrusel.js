const imgConteiner = document.querySelector(".carrousel__banners");
const puntos = document.querySelectorAll(".btn-banner");

puntos.forEach((cadaPunto, i) => {
    puntos[i].addEventListener("click", () => {
        let desplazamiento = i * -(100/3);

        console.log(imgConteiner.style.transform);
        imgConteiner.style.transform = `translateX(${desplazamiento}%)`;     
        
        
        puntos.forEach((cadaPunto, i) => {
            puntos[i].classList.remove("btn-active");
        });
        puntos[i].classList.add("btn-active");
    
    });     
});