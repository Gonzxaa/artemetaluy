const galeria = document.getElementById('gallerya')

const pintarGaleria = respuesta => {
    respuesta.galeria.forEach(element => {
        /**console.log(element) */
        galeria.innerHTML += `
            <div class="box delay">
                    <a
                    class="delay-1"
                    href="${element.ruta}"
                    data-fancybox="gallery"
                    >
                    <img
                        alt="${element.descripcion}"
                        src="${element.ruta}"
                        class="img-fluid"
                    />
                    </a>
                </div>
                </div>
          `
    });
}