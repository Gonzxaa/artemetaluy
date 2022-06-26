const galeria = document.getElementById('gallerya')
const formulario = document.querySelector('#formulario');
const resultado = document.getElementById('resultado')

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

/*INICIO Creacion Formulario Busqueda*/
const formularioImagenes = respuesta => {
	const filtrar = () => {
		resultado.innerHTML = '';
		const texto = formulario.value.toLowerCase()
		for (let formularioImagenes of respuesta.galeria) {
			let desc = formularioImagenes.descripcion.toLowerCase()
			if (desc.indexOf(texto) !== -1) {
				// console.log(texto)
                // console.log(formularioImagenes.ruta)
                // console.log(formularioImagenes.descripcion)
				resultado.innerHTML += `
                <div class="box delay">
                    <a
                    class="delay-1"
                    href="${formularioImagenes.ruta}"
                    data-fancybox="gallery2"
                    >
                    <img
                        alt="${formularioImagenes.descripcion}"
                        src="${formularioImagenes.ruta}"
                        class="img-fluid"
                    />
                    </a>
                </div>
                </div>
				`
			}
		}
		if (resultado.innerHTML === '') {
			resultado.innerHTML += `
			<p>Oh oh.. parece que todavía no tenemos imagenes acerca de eso 😮</p>
				`
		}
        if (formulario.value == '') {
            resultado.innerHTML = '';
        }
	}
	formulario.addEventListener('keyup', filtrar)
}
/*FIN Creacion Formulario Busqueda*/