document.querySelector('#barra-busqueda').addEventListener('input', (e) => {
    const busqueda = e.target.value.toLowerCase();
    grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );

});