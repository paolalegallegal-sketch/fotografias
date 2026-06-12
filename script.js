document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            e.preventDefault();

            const destino = this.href;

            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = destino;
            }, 500);

        });
    });

});




const camera = document.querySelector(".camera");

camera.addEventListener("click", () => {

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.backgroundColor = "white";
    flash.style.opacity = "0.9";
    flash.style.zIndex = "9999";
    flash.style.transition = "opacity 0.6s ease-out";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        flash.remove();
    }, 650);

});