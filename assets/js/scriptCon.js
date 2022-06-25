/*INICIO Carga de Datos*/
function cargarDatos() {
	$.ajax({
		url: "https://gonzxaa.github.io/artemetaluy/datos.json"
	}).done(function (respuesta) {
        pintarGaleria(respuesta);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	cargarDatos()
})
/*FIN Carga de Datos*/
