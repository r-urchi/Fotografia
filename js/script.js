const grid = new Muuri('.grid',{
    layout: {
        rounding: false
      }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (e) => {
            e.preventDefault();
            enlaces.forEach( (enlace) => enlace.classList.remove('activo') );
            e.target.classList.add('activo');

            
            const categoria = e.target.innerHTML.toLowerCase();
            if(categoria == 'todas'){
                grid.filter('[data-categoria]');
            }else{
            grid.filter(`[data-categoria="${categoria}"]`);
            };
        });

        
    });

    // barra de busqueda 

    document.querySelector('#barra-busqueda').addEventListener('input', (e) => {
        const busqueda = e.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );

    });

    // agrandar imagenes 

    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item__imagen').forEach( (elemento) => {
        
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .overlay__descripcion').innerHTML = descripcion;
        });
    });

    // boton cerrar 

    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });

    // cerrar con el overlay 

    overlay.addEventListener('click', (e) => {
        
        if(e.target.id === 'overlay'){
            overlay.classList.remove('activo');
        }

    });

});

